import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { UpdateMapCenter } from './UpdateMapCenter'
import { ISSIcon } from './ISSIcon'
import { ISSInfoCard } from './ISSInfoCard'

export type MapProps = {
  latitude: number
  longitude: number
  altitude: number
  velocity: number
  units: 'kilometers' | 'miles'
}

export const ISSMap = ({ latitude, longitude, ...props }: MapProps) => {
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
        url="http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[latitude, longitude]} icon={ISSIcon} />
      <UpdateMapCenter mapCenter={[latitude, longitude]} />
      <ISSInfoCard latitude={latitude} longitude={longitude} {...props} />
    </MapContainer>
  )
}
