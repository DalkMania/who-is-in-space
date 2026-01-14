import { Container } from '@/components/layout/Container'

export const App = () => {
  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12">
        <h1 className="w-full text-center">Who's in Space ?</h1>
        <p className="lead text-center">
          A Website about Space, the International Space Station (ISS) and who
          is currently up there. The station's mission is to serve as a unique
          microgravity laboratory for scientific research, enabling long-term
          human space exploration and providing benefits to Earth.
        </p>
      </div>
    </Container>
  )
}
