import { useRef } from 'react'

import { Container } from '@/components/layout/Container'
import { useSticky } from '@/hooks/useSticky'
import { Link } from '@tanstack/react-router'
import { Navigation } from '../Navigation'

export const Header = () => {
  const headerRef = useRef(null)
  const { isSticky } = useSticky(headerRef, 0)
  const defaultClasses = 'py-4 border-transparent'
  const stickyClasses = 'py-3 border-black/40'

  return (
    <header
      id="masthead"
      className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/80 ${
        !isSticky ? defaultClasses : stickyClasses
      }`}
      role="banner"
      ref={headerRef}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="text-foreground! font-bold ">
          <span className="text-lg tracking-wide">Who's in Space?</span>
        </Link>
        <Navigation />
      </Container>
    </header>
  )
}
