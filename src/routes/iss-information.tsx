import { createFileRoute } from '@tanstack/react-router'
import { ISSInformation } from '@/pages/ISSInformation'

export const Route = createFileRoute('/iss-information')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content: 'Where is the ISS right now?',
      },
      {
        title: "Who's in Space | ISS Information",
      },
    ],
  }),
  component: ISSInformation,
})
