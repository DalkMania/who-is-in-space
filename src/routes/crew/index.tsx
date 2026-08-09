import { createFileRoute } from '@tanstack/react-router'
import type { CrewList } from '@/types'
import { Crew } from '@/pages/Crew'

export const Route = createFileRoute('/crew/')({
  loader: async () => {
    const stationResponse = await fetch(
      'https://ll.thespacedevs.com/2.3.0/space_stations/4/?format=json',
    )

    if (!stationResponse.ok) {
      throw new Error('Unable to load the International Space Station data')
    }

    const station = (await stationResponse.json()) as {
      active_expeditions: Array<{ url: string }>
    }
    const expeditionUrl = station.active_expeditions[0]?.url

    if (!expeditionUrl) {
      return { count: 0, results: [] }
    }

    const [expeditionResponse, astronautsResponse] = await Promise.all([
      fetch(expeditionUrl),
      fetch(
        'https://ll.thespacedevs.com/2.3.0/astronauts/?format=json&in_space=true&is_human=true&ordering=-time_in_space&limit=50',
      ),
    ])

    if (!expeditionResponse.ok || !astronautsResponse.ok) {
      throw new Error('Unable to load the current ISS crew')
    }

    const expedition = (await expeditionResponse.json()) as {
      crew: Array<{ astronaut: { id: number } }>
    }
    const astronauts = (await astronautsResponse.json()) as CrewList
    const astronautsById = new Map(
      astronauts.results.map((astronaut) => [astronaut.id, astronaut]),
    )
    const results = expedition.crew
      .map(({ astronaut }) => astronautsById.get(astronaut.id))
      .filter((astronaut): astronaut is CrewList['results'][number] =>
        Boolean(astronaut),
      )

    return { count: results.length, results }
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
  staleTime: 5 * 60 * 1000,
})
