import { formatNumber } from '@/lib/utils'
import { Card, CardContent, CardHeader } from '../ui/card'

type InformationProps = {
  latitude: number
  longitude: number
  altitude: number
  velocity: number
  units: 'kilometers' | 'miles'
}

export const ISSInfoCard = ({
  latitude,
  longitude,
  altitude,
  velocity,
  units,
}: InformationProps) => {
  return (
    <Card className="absolute z-400 top-16 right-3 w-full max-w-75 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/80">
      <CardHeader>
        <h2 className="text-lg text-center">ISS Information</h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="flex justify-between text-sm ">
          <span>Altitude: </span>
          <span>{formatNumber(altitude, units)}</span>
        </p>
        <p className="flex justify-between text-sm">
          <span>Velocity: </span>
          <span>{formatNumber(velocity, units)} per hour</span>
        </p>
        <p className="flex justify-between text-sm">
          <span>Latitude: </span>
          <span>{latitude.toFixed(2)} &deg;</span>
        </p>
        <p className="flex justify-between text-sm">
          <span>Longitude: </span>
          <span>{longitude.toFixed(2)} &deg;</span>
        </p>
      </CardContent>
    </Card>
  )
}
