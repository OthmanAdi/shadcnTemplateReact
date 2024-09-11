import { clsx } from "clsx"
// Removed ClassValue import as it is not used
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}