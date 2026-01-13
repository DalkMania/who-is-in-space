import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { UpdateMapCenter } from './UpdateMapCenter'
import { ISSIcon } from './ISSIcon'

type MapPosition = {
  latitude: number
  longitude: number
}

export const ISSMap = ({ latitude, longitude }: MapPosition) => {
  return (
    <MapContainer
      style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
      center={[latitude, longitude]}
      zoom={4}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[latitude, longitude]} icon={ISSIcon} />
      <UpdateMapCenter mapCenter={[latitude, longitude]} />
    </MapContainer>
  )
}
