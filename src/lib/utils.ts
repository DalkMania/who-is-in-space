import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import sanitizeHtml from 'sanitize-html'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number, unit: string): string {
  return `${n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} ${unit}`
}

export function truncate(str: string, maxlength: number) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

export function fixImageLinks(src: string): null | string {
  if (src.includes('/sites/default/files/')) {
    return null
  }

  return src
}

export function sanitizeWikipediaEntry(data: string): string {
  return sanitizeHtml(data)
    .replaceAll('\n', '')
    .replaceAll('<p></p>', '')
    .replace(
      /(<h.>External links<\/h.>.*<ul|ol>).*<li>(.*)<\/li>.*(<\/ul>|<\/ol>)/,
      '',
    )
    .replace(/<h.>References<\/h.>/, '')
    .replace(/<h.>External links<\/h.>/, '')
}

export const slugify = (text: string) => {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and') // Replace & with ‘and’
    .replace(/\s+/g, '-')
    .replace(/[^\w\\-]+/g, '')
    .replace(/\\-\\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
