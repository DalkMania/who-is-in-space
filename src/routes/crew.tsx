import { createFileRoute } from '@tanstack/react-router'
import { Crew } from '@/pages/Crew'

export const Route = createFileRoute('/crew')({
  loader: async () => {
    const response = await fetch(
      'https://ll.thespacedevs.com/2.3.0/astronauts/?format=json&in_space=true&limit=50',
    )
    return await response.json()
  },
  component: Crew,
})
