// https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&titles=Kimiya%20Yui&explaintext=true&format=json&formatversion=2
// &prop=info|extracts|categories|revisions&indexpageids=true&titles=Albert Einstein&format=json&formatversion=2
import { useQuery } from '@tanstack/react-query'

export const useWikipedia = (title: string) =>
  useQuery({
    queryKey: [title],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&indexpageids=true&titles=${encodeURIComponent(title)}&format=json&formatversion=2`,
        )
        const data = await response.json()
        return data.query.pages[0]
      } catch (error: any) {
        console.error('Error fetching data:', error)
      }
    },
  })
