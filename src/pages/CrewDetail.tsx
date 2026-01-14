import { Container } from '@/components/layout/Container'
import { getRouteApi } from '@tanstack/react-router'
import { useWikipedia } from '@/queries/useWikipedia'
import { sanitizeWikipediaEntry } from '@/lib/utils'

export const CrewDetail = () => {
  const routeApi = getRouteApi('/crew/$id')
  const crewDetail = routeApi.useLoaderData()
  const { data } = useWikipedia(
    crewDetail?.wiki?.split('/')?.pop() || crewDetail.name,
  )

  if (!data) return null

  const sanitizedData = sanitizeWikipediaEntry(data.extract)

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12 ">
        <h1 className="w-full text-center">{crewDetail.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizedData.length > 0 ? sanitizedData : crewDetail.bio,
          }}
        />
      </div>
    </Container>
  )
}
