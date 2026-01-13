import { ApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useISSPosition = (initialData: ApiResponse) =>
  useQuery({
    queryKey: ['position'],
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    initialData: () => initialData,
    queryFn: async () => {
      try {
        const response = await fetch(
          'https://api.wheretheiss.at/v1/satellites/25544',
        )
        const data = await response.json()
        return data as ApiResponse
      } catch (error: any) {
        console.error('Error fetching data:', error)
      }
    },
  })
