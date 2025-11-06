import { BLUR_PLACEHOLDER } from "./constants";

export async function getBase64(url) {
  const base64str = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>


      <image preserveAspectRatio='none' x='0' y='0' height='100%' width='100%'
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

// Fetch blur data URLs for a single document with imageUrls array
export async function fetchBlurDataUrls(doc) {
  // Parallel processing for better performance
  const promises = doc.imageUrls.map(async (imageUrl, i) => {
    const aspectRatio =
      doc.imageAspectRatios?.[i] || BLUR_PLACEHOLDER.DEFAULT_ASPECT_RATIO;
    const width = BLUR_PLACEHOLDER.WIDTH;
    const height = Math.round(width / aspectRatio);
    const placeholderSrc = `${imageUrl.split("?")[0]}?tr=w-${width},h-${height},bl-10`;
    return await getBase64(placeholderSrc);
  });

  return Promise.all(promises);
}

// Fetch blur data URLs for featured docs (array of docs with url and aspectRatio)
export async function fetchFeaturedBlurDataUrls(docs) {
  // Parallel processing for better performance
  const promises = docs.map(async (doc) => {
    const aspectRatio =
      doc?.aspectRatio || BLUR_PLACEHOLDER.DEFAULT_ASPECT_RATIO;
    const width = BLUR_PLACEHOLDER.WIDTH;
    const height = Math.round(width / aspectRatio);
    const placeholderSrc = `${doc.url.split("?")[0]}?tr=w-${width},h-${height},bl-10`;
    return await getBase64(placeholderSrc);
  });

  return Promise.all(promises);
}
