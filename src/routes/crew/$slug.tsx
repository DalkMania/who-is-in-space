import { createFileRoute } from '@tanstack/react-router'
import { CrewDetail } from '@/pages/CrewDetail'

export const Route = createFileRoute('/crew/$slug')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Information about an astronaut currently in space.',
      },
      {
        title: `Who's in Space | Crew Information`,
      },
    ],
  }),
  component: CrewDetail,
  staleTime: Infinity,
  shouldReload: false,
})
