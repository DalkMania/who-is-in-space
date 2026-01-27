import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/pages/App'
import { ArticleList } from '@/types'

export const Route = createFileRoute('/')({
  loader: async () => {
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=3&format=json&news_site=NASA`,
    )
    const results = (await response.json()) as ArticleList
    return results
  },
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          ' The International Space Station (ISS) mission is to serve as a unique microgravity laboratory for scientific research, enabling long-term human space exploration and providing benefits to Earth.',
      },
      {
        title: "Who's in Space",
      },
    ],
  }),
  component: App,
})
