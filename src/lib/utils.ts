import { createIsomorphicFn } from '@tanstack/react-start'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const consoleLog = createIsomorphicFn()
  .server((msg: string) => console.log(`[SERVER]: ${msg}`))
  .client((msg: string) => console.log(`[CLIENT]: ${msg}`))
