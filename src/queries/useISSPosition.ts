import { useQuery } from '@tanstack/react-query'
import type { ApiResponse } from '@/types'

export const useISSPosition = () =>
  useQuery({
    queryKey: ['position'],
    refetchInterval: 3000,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      try {
        const response = await fetch(
          'https://api.wheretheiss.at/v1/satellites/25544?units=miles',
        )
        const data = await response.json()
        return data as ApiResponse
      } catch (error: any) {
        console.error('Error fetching data:', error)
      }
    },
  })
