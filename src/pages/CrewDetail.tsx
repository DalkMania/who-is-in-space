import { useRouterState } from '@tanstack/react-router'
import { Container } from '@/components/layout/Container'
import { useWikipedia } from '@/queries/useWikipedia'
import { sanitizeWikipediaEntry } from '@/lib/utils'

export const CrewDetail = () => {
  const state = useRouterState({ select: (s) => s.location.state })
  const crew = state.crew

  if (!crew) return null

  const wikiSlug = crew.wiki ? crew.wiki.split('/').pop() : null
  const { data } = useWikipedia(wikiSlug ?? `${crew.name} (astronaut)`)

  if (!data) return null

  const sanitizedData = sanitizeWikipediaEntry(data.extract)

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12 ">
        <h1 className="w-full text-center">{crew.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html:
              sanitizedData.length > 0 ? sanitizedData : crew.bio,
          }}
        />
      </div>
    </Container>
  )
}

declare module '@tanstack/react-router' {
  interface HistoryState {
    crew?: { name: string; wiki: string | null; bio: string }
  }
}
