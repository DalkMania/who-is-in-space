import { Container } from '@/components/layout/Container'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { getRouteApi, Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import AstronautPlaceholder from '@/assets/images/astronaut-placeholder.jpg'

export const Crew = () => {
  const routeApi = getRouteApi('/crew/')
  const crewData = routeApi.useLoaderData()

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

        <div className="grid grid-cols-4 gap-8 pt-8 not-prose">
          {crewData?.results?.map((item: any) => (
            <Link to="/crew/$id" params={{ id: item.id }} key={item.id}>
              <Card>
                <Image
                  alt={item.name}
                  src={item?.image?.image_url || AstronautPlaceholder}
                  height={800}
                  width={800}
                  className="object-cover w-full object-center h-80 rounded-t-xl"
                />
                <CardHeader className="flex justify-between items-center">
                  <h2>{item.name}</h2>
                  <Image
                    alt={item.nationality[0].name}
                    src={`https://flagsapi.com/${item.nationality[0].alpha_2_code}/shiny/24.png`}
                    height={24}
                    width={24}
                    className="h-6"
                  />
                </CardHeader>
                <CardContent className="text-sm">
                  <p>
                    Flights: <span>{item.flights_count}</span>
                  </p>
                  <p>
                    Landings: <span>{item.landings_count}</span>
                  </p>
                  <p>
                    Spacewalks: <span>{item.spacewalks_count}</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
