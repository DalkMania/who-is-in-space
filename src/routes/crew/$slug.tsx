import { createFileRoute } from '@tanstack/react-router'
import { CrewDetail } from '@/pages/CrewDetail'

export const Route = createFileRoute('/crew/$slug')({
  component: CrewDetail,
})
