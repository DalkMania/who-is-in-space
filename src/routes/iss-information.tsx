import { createFileRoute } from '@tanstack/react-router'
import { ISSInformation } from '@/pages/ISSInformation'
import { ApiResponse } from '@/types'

export const Route = createFileRoute('/iss-information')({
  loader: async () => {
    const response = await fetch(
      'https://api.wheretheiss.at/v1/satellites/25544?units=miles',
    )
    return (await response.json()) as ApiResponse
  },
  component: ISSInformation,
})
