import { Container } from '@/components/layout/Container'
import { getRouteApi } from '@tanstack/react-router'
import { AstronautCard } from '@/components/AstronautCard'

export const Crew = () => {
  const routeApi = getRouteApi('/crew/')
  const { results } = routeApi.useLoaderData()

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12">
        <h1 className="w-full text-center">Current ISS Crew</h1>
        <p className="lead">
          The International Space Station (ISS) mission is to serve as a unique
          microgravity laboratory for scientific research, enabling long-term
          human space exploration and providing benefits to Earth. These are the
          astronauts currently in space.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-8 not-prose">
          {results?.map((item) => (
            <AstronautCard {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Container>
  )
}
