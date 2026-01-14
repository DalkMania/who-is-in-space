import { createFileRoute } from '@tanstack/react-router'
import { Crew } from '@/pages/Crew'

export const Route = createFileRoute('/crew/')({
  loader: async () => {
    const response = await fetch(
      'https://ll.thespacedevs.com/2.3.0/astronauts/?format=json&in_space=true&is_human=true&ordering=-time_in_space&limit=50',
    )
    return await response.json()
  },
  component: Crew,
  staleTime: Infinity,
  shouldReload: false,
})
