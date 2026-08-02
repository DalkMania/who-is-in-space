import ReactBadge from '../badges/ReactBadge'
import TailwindBadge from '../badges/TailwindBadge'
import TanStackBadge from '../badges/TanStackBadge'
import TypeScriptBadge from '../badges/TypeScriptBadge'
import { Container } from './Container'

export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="sticky py-4 border-t border-black/40 bg-background/80">
      <Container className="lg:flex lg:items-center lg:justify-between">
        <p className="w-full pb-2 text-center lg:w-max lg:pb-0 lg:text-left">
          Copyright © {date} Niklas Dahlqvist
        </p>
        <div className="flex gap-2 justify-center">
          <ReactBadge />
          <TypeScriptBadge />
          <TanStackBadge />
          <TailwindBadge />
        </div>
      </Container>
    </footer>
  )
}
