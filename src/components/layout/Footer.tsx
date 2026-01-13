import { Container } from './Container'

export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="sticky py-4 border-t border-black/40 bg-background/80">
      <Container>
        <p>Copyright © {date} Niklas Dahlqvist</p>
      </Container>
    </footer>
  )
}
