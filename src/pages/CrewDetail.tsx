import { Container } from '@/components/layout/Container'
import { getRouteApi } from '@tanstack/react-router'
import { Image } from '@unpic/react'
import AstronautPlaceholder from '@/assets/images/astronaut-placeholder.jpg'

export const CrewDetail = () => {
  const routeApi = getRouteApi('/crew/$id')
  const crewDetail = routeApi.useLoaderData()

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12 ">
        <h1 className="w-full text-center">{crewDetail.name}</h1>
        <div className="flex gap-24 justify-between">
          <p>{crewDetail.bio}</p>
          <Image
            alt={crewDetail.name}
            src={crewDetail?.image?.image_url || AstronautPlaceholder}
            height={300}
            width={300}
            className="rounded-xl"
          />
        </div>
      </div>

      <pre>{JSON.stringify(crewDetail, null, 2)}</pre>
    </Container>
  )
}
