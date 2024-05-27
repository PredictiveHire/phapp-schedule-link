import { type ClassValue, clsx as baseClsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(baseClsx(inputs))
}
