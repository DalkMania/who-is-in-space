import { ClientOnly } from '@tanstack/react-router'
import { useISSPosition } from '@/queries/useISSPosition'
import { Loader } from '@/components/Loader'
import { ISSMap } from '@/components/map/ISSMap'

export const ISSInformation = () => {
  const { data: position, isLoading } = useISSPosition()

  return (
    <ClientOnly>{isLoading ? <Loader /> : <ISSMap {...position} />}</ClientOnly>
  )
}
