import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/pages/App'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=3&format=json&news_site=NASA`,
    )
    const results = await response.json()
    return results.results
  },
  component: App,
})

// /launches/upcoming/?format=json
