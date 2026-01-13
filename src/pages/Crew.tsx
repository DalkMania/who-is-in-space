import { Container } from '@/components/layout/Container'
import { getRouteApi } from '@tanstack/react-router'

export const Crew = () => {
  const routeApi = getRouteApi('/crew')
  const crewData = routeApi.useLoaderData()

  return (
    <Container>
      <pre>{JSON.stringify(crewData, null, 2)}</pre>
    </Container>
  )
}
