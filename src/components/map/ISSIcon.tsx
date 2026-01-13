import L from 'leaflet'
import ISSImage from '@/assets/images/iss.png'

export const ISSIcon = new L.Icon({
  iconUrl: ISSImage,
  iconSize: new L.Point(84, 60),
})
