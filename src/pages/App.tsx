import { useISSPosition } from '@/queries/useISSPosition'
import { ApiResponse } from '@/types'
import { ClientOnly, getRouteApi } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { ISSIcon } from '@/components/ISSIcon'
import { LatLngTuple } from 'leaflet'
import { Loader } from '@/components/Loader'

export const App = () => {
  const routeApi = getRouteApi('/')
  const firstData = routeApi.useLoaderData()
  const [position, setPosition] = useState<ApiResponse>(firstData)
  const { data } = useISSPosition()

  useEffect(() => {
    if (data) {
      setPosition(data)
    }
  }, [data])

  interface MapCentreProps {
    mapCentre: LatLngTuple
  }

  const UpdateMapCentre = (props: MapCentreProps) => {
    const map = useMap()
    map.panTo(props.mapCentre)
    return null
  }

  return (
    <ClientOnly fallback={<Loader />}>
      <MapContainer
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
        center={[position.latitude, position.longitude]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker
          position={[position.latitude, position.longitude]}
          icon={ISSIcon}
        />
        <UpdateMapCentre mapCentre={[position.latitude, position.longitude]} />
      </MapContainer>
    </ClientOnly>
  )
}
