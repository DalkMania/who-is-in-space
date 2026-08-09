import { createFileRoute } from '@tanstack/react-router'
import { Crew } from '@/pages/Crew'
import { getCurrentCrew } from '@/server/crew.functions'

export const Route = createFileRoute('/crew/')({
  loader: async () => {
    return getCurrentCrew()
  },
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          'These are the astronauts currently onboard the International Space Station.',
      },
      {
        title: "Who's in Space | Crew",
      },
    ],
  }),
  component: Crew,
  staleTime: 3 * 24 * 60 * 60 * 1000,
})
