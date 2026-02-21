import { Container } from '@/components/layout/Container'
import { getRouteApi } from '@tanstack/react-router'
import { ArticleCard } from '@/components/ArticleCard'

export const App = () => {
  const routeApi = getRouteApi('/')
  const { results } = routeApi.useLoaderData()

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12">
        <h1 className="w-full text-center">Who's in Space ?</h1>
        <p className="lead text-center">
          A website about Space, the International Space Station (ISS) and who
          is currently up there. The station's mission is to serve as a unique
          microgravity laboratory for scientific research, enabling long-term
          human space exploration and providing benefits to Earth.
        </p>
        <h2>Recent Articles from NASA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 not-prose">
          {results.length > 0 &&
            results.map((item) => {
              return <ArticleCard {...item} key={item.id} />
            })}
        </div>
      </div>
    </Container>
  )
}
