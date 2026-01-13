import { ReactNode } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type PaginationProps = {
  totalResults: number
  number: number
  page?: string
}

export const PostPagination = ({
  totalResults,
  number,
  page,
}: PaginationProps) => {
  const numPages = Math.floor(totalResults / number)
  const currentPage = Number(page) || 1

  const renderPageNumbers = () => {
    const items: ReactNode[] = []
    const maxVisiblePages = 5

    if (numPages <= maxVisiblePages) {
      for (let i = 1; i <= numPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/articles/${i}`}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href={`/articles/`} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>,
      )

      if (currentPage > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      const start = Math.max(2, currentPage - 1)
      const end = Math.min(numPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink
              href={`/articles/${i}`}
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        )
      }

      if (currentPage < numPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      items.push(
        <PaginationItem key={numPages}>
          <PaginationLink
            href={`/articles/${numPages}`}
            isActive={currentPage === numPages}
          >
            {numPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return items
  }

  return (
    <Pagination className="py-8">
      <PaginationContent>
        <PaginationPrevious
          href={`/articles/${currentPage - 1}`}
          aria-disabled={currentPage === 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
          className={
            currentPage <= 1 ? 'pointer-events-none opacity-50' : undefined
          }
        >
          Previous
        </PaginationPrevious>

        {renderPageNumbers()}

        <PaginationNext
          href={`/articles/${currentPage - 2}`}
          aria-disabled={currentPage === numPages}
          tabIndex={currentPage === numPages ? -1 : undefined}
          className={
            currentPage === numPages
              ? 'pointer-events-none opacity-50'
              : undefined
          }
        >
          Next
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  )
}
