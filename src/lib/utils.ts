import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import DOMPurify from 'dompurify'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
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

export function sanitizeWikipediaEntry(data: string): string {
  // Use a hook to safely remove target sections and empty paragraphs during the DOM phase
  DOMPurify.addHook('afterSanitizeElements', (node) => {
    const element = node as HTMLElement

    // 1. Remove empty paragraphs
    if (
      element.tagName === 'P' &&
      !element.textContent?.trim() &&
      !element.children.length
    ) {
      element.remove()
      return
    }

    // 2. Identify and remove References/External Links headings and their immediate lists
    const isHeading = /^H[1-6]$/.test(element.tagName)
    if (isHeading) {
      const text = element.textContent?.trim().toLowerCase()
      if (
        text === 'references' ||
        text === 'external links' ||
        text === 'see also'
      ) {
        // Safely find and remove the list that immediately follows this heading
        let nextEl = element.nextElementSibling
        while (
          nextEl &&
          nextEl.tagName !== 'H1' &&
          nextEl.tagName !== 'H2' &&
          nextEl.tagName !== 'H3'
        ) {
          const current = nextEl
          nextEl = nextEl.nextElementSibling // Advanced reference before removal
          if (current.tagName === 'UL' || current.tagName === 'OL') {
            current.remove()
          }
        }

        // Remove the heading itself
        element.remove()
      }
    }
  })

  // Execute sanitization
  const cleaned = DOMPurify.sanitize(data, {
    FORBID_ATTR: ['class', 'data-*'],
    RETURN_DOM: false, // Returns clean string
  })

  // Always clean up hooks so they don't leak into other DOMPurify calls
  DOMPurify.removeHooks('afterSanitizeElements')

  // Strip literal newlines safely from the final string output
  return cleaned.replaceAll('\n', '')
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
