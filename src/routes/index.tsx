import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/pages/App'
import { ApiResponse } from '@/types'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch(
      'https://api.wheretheiss.at/v1/satellites/25544',
    )
    return (await response.json()) as ApiResponse
  },
  component: App,
})
