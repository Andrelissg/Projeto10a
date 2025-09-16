import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Função para simular delay (para testes)
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
