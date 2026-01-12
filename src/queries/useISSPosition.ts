import { ApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useISSPosition = () =>
  useQuery({
    queryKey: ['position'],
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
    queryFn: async () => {
      try {
        const response = await fetch('/api/iss')
        const data = await response.json()
        return data as ApiResponse
      } catch (error: any) {
        console.error('Error fetching data:', error)
      }
    },
  })
