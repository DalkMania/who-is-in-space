import { Articles } from '@/pages/Articles'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/{-$page}')({
  loader: async ({ params }) => {
    const perPage = 12
    const page = Number(params.page) || 1
    const offset = page > 1 ? perPage * page : 0
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=${perPage}${offset > 0 ? `&offset=${offset}` : ``}&format=json&news_site=NASA`,
    )
    return await response.json()
  },
  component: Articles,
})
