import { getRouteApi } from '@tanstack/react-router'
import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Image } from '@unpic/react'
import AstronautPlaceholder from '@/assets/images/astronaut-placeholder.jpg'
import { PostPagination } from '@/components/Pagination'

export const Articles = () => {
  const routeApi = getRouteApi('/articles/{-$page}')
  const articleData = routeApi.useLoaderData()
  const { page } = routeApi.useParams()

  return (
    <Container>
      <div className="grid grid-cols-3 gap-8 pt-8 not-prose">
        {articleData?.results?.map((item: any) => (
          <Card className="flex flex-col" key={item.id}>
            <Image
              alt={item.title}
              src={item.image_url || AstronautPlaceholder}
              height={400}
              width={400}
              className="object-cover w-full object-center h-80 rounded-t-xl"
            />
            <CardHeader className="flex justify-between items-center">
              <h2>{item.title}</h2>
            </CardHeader>

            <CardContent className="text-base leading-relaxed flex-1">
              <p>{item.summary}</p>
            </CardContent>
            <CardFooter>
              <p className="mt-auto">{item.news_site}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <PostPagination
        totalResults={articleData.count}
        number={12}
        page={page}
      />
    </Container>
  )
}
