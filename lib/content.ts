/**
 * Content loading utilities - replaces Firebase with static JSON
 * Drop-in replacement for app/service/fetchDocs.js
 */

import { cache } from "react";
import fs from "fs/promises";
import path from "path";
import type { Gallery, DisplaySize } from "@/app/types/content";

const CONTENT_DIR = path.join(process.cwd(), "content");

type ContentDoc = Record<string, unknown>;

/**
 * Read and parse a JSON file
 */
async function readJsonFile<T>(filePath: string): Promise<T | null> {
  try {
    const fullPath = path.join(CONTENT_DIR, filePath);
    const content = await fs.readFile(fullPath, "utf-8");
    return JSON.parse(content) as T;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error(`Error reading content file: ${filePath}`, error);
    }
    return null;
  }
}

/**
 * Get all JSON files from a directory
 */
async function getFilesFromDir(dirPath: string): Promise<string[]> {
  try {
    const fullPath = path.join(CONTENT_DIR, dirPath);
    const files = await fs.readdir(fullPath);
    return files.filter((file) => file.endsWith(".json"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      console.error(`Error reading directory: ${dirPath}`, error);
    }
    return [];
  }
}

/**
 * Fetch documents from a collection path
 * Compatible with Firebase fetchDocs() interface
 */
export const fetchDocs = cache(async (ref: string): Promise<ContentDoc[]> => {
  try {
    if (!ref || typeof ref !== "string") {
      console.error("Invalid ref provided to fetchDocs:", ref);
      return [];
    }

    // Use the path directly (e.g., "gallery/analog", "featured/vertical")
    const contentPath = ref;

    // Check if it's a single file or directory
    const singleFilePath = `${contentPath}.json`;
    const singleFile = await readJsonFile<ContentDoc | ContentDoc[]>(singleFilePath);

    if (singleFile) {
      if (Array.isArray(singleFile)) {
        return singleFile;
      }
      if (singleFile.items) {
        return singleFile.items as ContentDoc[];
      }
      if (singleFile.images) {
        return singleFile.images as ContentDoc[];
      }
      if (singleFile.paragraphs) {
        return singleFile.paragraphs as ContentDoc[];
      }
      return [singleFile];
    }

    // Try reading as directory
    const files = await getFilesFromDir(contentPath);
    const docs: ContentDoc[] = [];

    for (const file of files) {
      const data = await readJsonFile<ContentDoc>(`${contentPath}/${file}`);
      if (data) {
        docs.push({ ...data, id: file.replace(".json", "") });
      }
    }

    return docs.sort((a, b) => {
      const dateA = a.date ? new Date(a.date as string).getTime() : 0;
      const dateB = b.date ? new Date(b.date as string).getTime() : 0;
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error fetching docs from", ref, ":", error);
    return [];
  }
});

/**
 * Fetch a single document
 * Compatible with Firebase fetchDoc() interface
 */
export const fetchDoc = cache(async (ref: string): Promise<ContentDoc> => {
  try {
    if (!ref || typeof ref !== "string") {
      console.error("Invalid ref provided to fetchDoc:", ref);
      return {};
    }

    // Use the path directly (e.g., "contact-info", "gallery/digital/project-name")
    const data = await readJsonFile<ContentDoc>(`${ref}.json`);
    return data || {};
  } catch (error) {
    console.error("Error fetching doc from", ref, ":", error);
    return {};
  }
});

/**
 * Fetch URLs from a collection
 */
export const fetchUrls = cache(async (ref: string): Promise<string[]> => {
  try {
    const docs = await fetchDocs(ref);
    return docs.map((doc) => doc.url).filter((url): url is string => Boolean(url));
  } catch (error) {
    console.error("Error fetching URLs from", ref, ":", error);
    return [];
  }
});

/**
 * Normalize tags - handles both array elements and comma-separated strings
 */
function normalizeTags(tags?: string[]): string[] {
  if (!tags) return [];
  const normalized: string[] = [];
  for (const tag of tags) {
    // Split by comma and trim whitespace
    const parts = tag.split(",").map((t) => t.trim().toLowerCase());
    normalized.push(...parts.filter(Boolean));
  }
  return normalized;
}

/**
 * Check if a gallery has a specific tag
 */
export function hasTag(gallery: Gallery, tag: string): boolean {
  const tags = normalizeTags(gallery.tags);
  return tags.includes(tag.toLowerCase());
}

/**
 * Check if a gallery is hidden (has "hidden" tag)
 */
export function isHidden(gallery: Gallery): boolean {
  return hasTag(gallery, "hidden");
}

/**
 * Check if a gallery is downloadable (has "downloadable" tag)
 */
export function isDownloadable(gallery: Gallery): boolean {
  return hasTag(gallery, "downloadable");
}

/**
 * Check if a gallery is password protected (has non-empty password)
 */
export function isPasswordProtected(gallery: Gallery): boolean {
  return Boolean(gallery.password && gallery.password.trim() !== "");
}

/**
 * Fetch galleries, optionally filtered by category
 * By default excludes galleries with "hidden" tag from public listings
 */
export const fetchGalleries = cache(
  async (category?: string, includeHidden = false): Promise<Gallery[]> => {
    try {
      // Read individual gallery files from content/gallery folder
      const galleryDir = path.join(CONTENT_DIR, "gallery");
      const files = await fs.readdir(galleryDir);
      const jsonFiles = files.filter((f) => f.endsWith(".json"));

      const galleries: Gallery[] = [];
      for (const file of jsonFiles) {
        const data = await readJsonFile<Gallery>(`gallery/${file}`);
        if (data) {
          galleries.push(data);
        }
      }

      // Filter out hidden galleries unless explicitly included
      let filtered = includeHidden
        ? galleries
        : galleries.filter((g) => !isHidden(g));

      // Filter by tag if specified (supports both tags and legacy category)
      if (category) {
        filtered = filtered.filter((g) => {
          // Check tags array first
          if (g.tags?.includes(category)) return true;
          // Fall back to category for backwards compatibility
          if (Array.isArray(g.category)) return g.category.includes(category);
          return g.category === category;
        });
      }

      // Sort by date (newest first)
      return filtered.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });
    } catch (error) {
      console.error("Error fetching galleries:", error);
      return [];
    }
  }
);

/**
 * Fetch a single gallery by ID
 */
export const fetchGalleryById = cache(
  async (id: string): Promise<Gallery | null> => {
    try {
      const data = await readJsonFile<Gallery>(`gallery/${id}.json`);
      return data;
    } catch (error) {
      console.error("Error fetching gallery by id:", id, error);
      return null;
    }
  }
);

/**
 * Fetch featured galleries for homepage
 * Featured = has "featured" tag OR featured: true (legacy)
 */
export const fetchFeaturedGalleries = cache(async (): Promise<Gallery[]> => {
  try {
    const allGalleries = await fetchGalleries();
    return allGalleries.filter(
      (g) => g.featured === true || g.tags?.includes("featured")
    );
  } catch (error) {
    console.error("Error fetching featured galleries:", error);
    return [];
  }
});

/**
 * Fetch protected gallery by slug
 */
export const fetchProtectedGallery = cache(
  async (slug: string): Promise<Gallery | null> => {
    try {
      const data = await readJsonFile<Gallery>(`galleries/${slug}.json`);
      return data;
    } catch (error) {
      console.error("Error fetching gallery:", slug, error);
      return null;
    }
  }
);

/**
 * Verify gallery password
 * Returns true if gallery is public (no password) or password matches
 */
export async function verifyGalleryPassword(
  slug: string,
  password: string
): Promise<boolean> {
  const gallery = await fetchGalleryById(slug);
  if (!gallery) return false;
  // If no password set, gallery is public
  if (!isPasswordProtected(gallery)) return true;
  // Check password match
  return gallery.password === password;
}

/**
 * Generate blur placeholder for images
 */
export function generateBlurPlaceholder(width = 10, height = 10): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <rect width="100%" height="100%" fill="#1a1a1a" filter="url(#b)" />
    </svg>
  `;
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Tag-to-layout mapping for display sizes
 */
const TAG_TO_SIZE: Record<string, DisplaySize> = {
  hero: "full",
  featured: "full",
  highlight: "full",
  editorial: "half",
  pair: "half",
  duo: "half",
  portrait: "third",
  small: "third",
  grid: "third",
};

/**
 * Compute display size for a gallery based on tags and aspect ratio
 * 1. Check tags for layout keywords
 * 2. Fall back to aspect ratio: >= 2.0 = full, < 0.8 = third, else half
 */
export function computeDisplaySize(gallery: Gallery): DisplaySize {
  // Get all tags (from tags array or convert category to array)
  const tags: string[] = [];
  if (gallery.tags) {
    tags.push(...gallery.tags);
  }
  if (gallery.category) {
    if (Array.isArray(gallery.category)) {
      tags.push(...gallery.category);
    } else {
      tags.push(gallery.category);
    }
  }

  // Check tags for layout hints
  for (const tag of tags) {
    const normalizedTag = tag.toLowerCase();
    if (TAG_TO_SIZE[normalizedTag]) {
      return TAG_TO_SIZE[normalizedTag];
    }
  }

  // Fall back to aspect ratio of cover image
  const aspectRatio = gallery.imageAspectRatios?.[0] ?? 1.5;
  if (aspectRatio >= 2.0) return "full";
  if (aspectRatio < 0.8) return "third";
  return "half";
}

/**
 * Fetch featured galleries with computed display sizes for layout
 * Featured = has "featured" tag OR featured: true (legacy)
 * Excludes hidden galleries
 */
export const fetchFeaturedGalleriesWithLayout = cache(
  async (): Promise<Gallery[]> => {
    try {
      // fetchGalleries already excludes hidden galleries by default
      const allGalleries = await fetchGalleries();
      const featured = allGalleries.filter(
        (g) => g.featured === true || g.tags?.includes("featured")
      );

      // Sort by date (newest first)
      const sorted = featured.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });

      // Add computed display sizes
      return sorted.map((gallery) => ({
        ...gallery,
        displaySize: computeDisplaySize(gallery),
      }));
    } catch (error) {
      console.error("Error fetching featured galleries with layout:", error);
      return [];
    }
  }
);
