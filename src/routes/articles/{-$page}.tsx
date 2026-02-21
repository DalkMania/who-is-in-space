import { Articles } from '@/pages/Articles'
import { ArticleList } from '@/types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/{-$page}')({
  loader: async ({ params }) => {
    const perPage = 12
    const page = Number(params.page) || 1
    const offset = page > 1 ? perPage * page - perPage : 0
    const response = await fetch(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=${perPage}${offset > 0 ? `&offset=${offset}` : ``}&format=json&news_site=NASA`,
    )
    return (await response.json()) as ArticleList
  },
  head: ({ params }) => ({
    meta: [
      {
        name: 'description',
        content: 'Spaceflight-related news articles from NASA.',
      },
      {
        title: `Who's in Space | Articles from Nasa ${Number(params.page) > 1 ? `Page ${Number(params.page)}` : ``}`,
      },
    ],
  }),
  component: Articles,
})
