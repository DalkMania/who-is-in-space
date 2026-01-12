import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/pages/App'
import { ApiResponse } from '@/types'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch('http://localhost:3000/api/iss')
    return (await response.json()) as ApiResponse
  },
  component: App,
})
