import { createFileRoute } from '@tanstack/react-router'
import { CrewDetail } from '@/pages/CrewDetail'

export const Route = createFileRoute('/crew/$id')({
  loader: async ({ params }) => {
    const response = await fetch(
      `https://lldev.thespacedevs.com/2.3.0/astronauts/${params.id}/?format=json`,
    )
    return await response.json()
  },
  component: CrewDetail,
  staleTime: Infinity,
  shouldReload: false,
})
