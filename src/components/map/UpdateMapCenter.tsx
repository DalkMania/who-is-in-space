import { useMap } from 'react-leaflet'

type LatLngTuple = [number, number, (number | undefined)?]

type MapCenterPosition = {
  mapCenter: LatLngTuple
}

export const UpdateMapCenter = ({ mapCenter }: MapCenterPosition) => {
  const map = useMap()
  map.panTo(mapCenter)
  return null
}
