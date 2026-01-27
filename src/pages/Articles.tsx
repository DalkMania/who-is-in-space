import { getRouteApi } from '@tanstack/react-router'
import { Container } from '@/components/layout/Container'
import { PostPagination } from '@/components/Pagination'
import { ArticleCard } from '@/components/ArticleCard'

export const Articles = () => {
  const routeApi = getRouteApi('/articles/{-$page}')
  const { results, count } = routeApi.useLoaderData()
  const { page } = routeApi.useParams()

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! pt-12 pb-6">
        <h1 className="w-full text-center">Articles</h1>
        <p className="lead text-center">
          Spaceflight-related news articles from NASA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 not-prose">
          {results?.map((item) => (
            <ArticleCard {...item} key={item.id} />
          ))}
        </div>
      </div>
      <PostPagination totalResults={count} number={12} page={page} />
    </Container>
  )
}
