import { getStore } from '@netlify/blobs'
import { createServerFn } from '@tanstack/react-start'
import type { CrewList } from '@/types'

const CACHE_KEY = 'iss-crew'
const CACHE_TTL = 3 * 24 * 60 * 60 * 1000

export const getCurrentCrew = createServerFn({ method: 'GET' }).handler(
  async (): Promise<CrewList> => {
    const store = getStore('space-cache')
    const cached = await store.getWithMetadata(CACHE_KEY, {
      type: 'json',
    })

    if (cached?.metadata.expiresAt && cached.metadata.expiresAt > Date.now()) {
      return cached.data
    }

    try {
      const stationResponse = await fetch(
        'https://ll.thespacedevs.com/2.3.0/space_stations/4/?format=json',
      )
      if (!stationResponse.ok) throw new Error('ISS request failed')

      const station = (await stationResponse.json()) as {
        active_expeditions: Array<{ url: string }>
      }
      const expeditionUrl = station.active_expeditions[0]?.url
      if (!expeditionUrl) return { count: 0, results: [] }

      const [expeditionResponse, astronautsResponse] = await Promise.all([
        fetch(expeditionUrl),
        fetch(
          'https://ll.thespacedevs.com/2.3.0/astronauts/?format=json&in_space=true&is_human=true&ordering=-time_in_space&limit=50',
        ),
      ])
      if (!expeditionResponse.ok || !astronautsResponse.ok) {
        throw new Error('ISS crew request failed')
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
      const data = { count: results.length, results }

      await store.setJSON(CACHE_KEY, data, {
        metadata: { expiresAt: Date.now() + CACHE_TTL },
      })

      return data
    } catch (error) {
      if (cached) return cached.data
      throw error
    }
  },
)
