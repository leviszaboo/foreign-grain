import { clsx, ClassValue } from "clsx";

/**
 * Utility for combining class names with conditional logic
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
