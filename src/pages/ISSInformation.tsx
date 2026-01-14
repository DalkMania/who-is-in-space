import { ClientOnly, getRouteApi } from '@tanstack/react-router'
import { useISSPosition } from '@/queries/useISSPosition'
import { Loader } from '@/components/Loader'
import { ISSMap } from '@/components/map/ISSMap'

export const ISSInformation = () => {
  const routeApi = getRouteApi('/iss-information')
  const initialData = routeApi.useLoaderData()
  const { data: position, isFetched } = useISSPosition(initialData)

  return (
    <ClientOnly fallback={<Loader />}>
      {isFetched && position && <ISSMap {...position} />}
    </ClientOnly>
  )
}
