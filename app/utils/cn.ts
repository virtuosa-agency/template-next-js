// Ce fichier vous permet d'utiliser conformtement les classes de Tailwind CSS dans votre projet

import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
