import { getRouteApi, Link } from '@tanstack/react-router'
import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Image } from '@unpic/react'
import NasaPlaceholder from '@/assets/images/nasa-placeholder.jpg'
import { PostPagination } from '@/components/Pagination'
import { fixImageLinks, truncate } from '@/lib/utils'

export const Articles = () => {
  const routeApi = getRouteApi('/articles/{-$page}')
  const articleData = routeApi.useLoaderData()
  const { page } = routeApi.useParams()

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! pt-12 pb-6">
        <h2 className="w-full text-center">Articles</h2>
        <p className="lead text-center">
          Spaceflight-related news articles from NASA
        </p>
        <div className="grid grid-cols-3 gap-8 pt-8 not-prose">
          {articleData?.results?.map((item: any) => (
            <Link to={item.url} key={item.id} target="_blank">
              <Card className="flex flex-col h-full">
                <Image
                  alt={item.title}
                  src={fixImageLinks(item.image_url) || NasaPlaceholder}
                  height={400}
                  width={400}
                  className="object-cover w-full object-center h-80 rounded-t-xl"
                />
                <CardHeader>
                  <h2>{item.title}</h2>
                </CardHeader>

                <CardContent className="text-base leading-relaxed flex-1">
                  <p>{truncate(item.summary, 110)}</p>
                </CardContent>
                <CardFooter>
                  <p className="mt-auto">{item.news_site}</p>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <PostPagination
        totalResults={articleData.count}
        number={12}
        page={page}
      />
    </Container>
  )
}
