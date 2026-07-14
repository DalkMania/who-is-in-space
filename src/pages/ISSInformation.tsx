import { ClientOnly } from '@tanstack/react-router'
import { useISSPosition } from '@/queries/useISSPosition'
import { Loader } from '@/components/Loader'
import { ISSMap } from '@/components/map/ISSMap'

export const ISSInformation = () => {
  const { data: position, isFetched } = useISSPosition()

  return (
    <ClientOnly fallback={<Loader />}>
      {isFetched && position && <ISSMap {...position} />}
    </ClientOnly>
  )
}
