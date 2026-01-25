import { Container } from '@/components/layout/Container'
import { useRouterState } from '@tanstack/react-router'
import { useWikipedia } from '@/queries/useWikipedia'
import { sanitizeWikipediaEntry } from '@/lib/utils'

export const CrewDetail = () => {
  const state = useRouterState({ select: (s) => s.location.state })
  const { data } = useWikipedia(
    state?.crew?.wiki?.split('/')?.pop() || state?.crew?.name! + ' (astronaut)',
  )

  if (!data) return null

  const sanitizedData = sanitizeWikipediaEntry(data.extract)

  return (
    <Container>
      <div className="prose lg:prose-xl max-w-none! py-12 ">
        <h1 className="w-full text-center">{state?.crew?.name}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html:
              sanitizedData.length > 0 ? sanitizedData : state?.crew?.bio!,
          }}
        />
      </div>
    </Container>
  )
}

declare module '@tanstack/react-router' {
  interface HistoryState {
    crew?: { name: string; wiki: string; bio: string }
  }
}
