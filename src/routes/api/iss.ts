import { ApiResponse } from '@/types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/iss')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const response = await fetch(
            'https://api.wheretheiss.at/v1/satellites/25544',
          )

          if (!response.ok) {
            throw new Error(response.statusText)
          }

          const json: ApiResponse = await response.json()
          return Response.json(json)
        } catch (error) {
          console.error(error)
          return Response.json({ error: 'Location not found' }, { status: 404 })
        }
      },
    },
  },
})
