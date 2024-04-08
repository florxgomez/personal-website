import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTagDecoration(tag: string) {
  let decoration = "underline decoration-2 underline-offset-2";
  if (tag === "tailwind-css") {
    decoration += " decoration-teal-400";
  }
  if (tag === "typescript") {
    decoration += " decoration-blue-500";
  }
  return decoration;
}
