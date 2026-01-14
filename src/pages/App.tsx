import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Image } from '@unpic/react'
import NasaPlaceholder from '@/assets/images/nasa-placeholder.jpg'
import { getRouteApi, Link } from '@tanstack/react-router'
import { fixImageLinks, truncate } from '@/lib/utils'

export const App = () => {
  const routeApi = getRouteApi('/')
  const articleData = routeApi.useLoaderData()

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
        <h2>Recent Articles from NASA</h2>
        <div className="grid grid-cols-3 gap-8 pt-8 not-prose">
          {articleData.map((item: any) => (
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
    </Container>
  )
}
