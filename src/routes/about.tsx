import { About } from '@/pages/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        name: 'description',
        content:
          ' The International Space Station (ISS) mission is to serve as a unique microgravity laboratory for scientific research, enabling long-term human space exploration and providing benefits to Earth.',
      },
      {
        title: "Who's in Space | About",
      },
    ],
  }),
  component: About,
})
