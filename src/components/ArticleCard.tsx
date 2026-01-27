import { Article } from '@/types'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Image } from '@unpic/react'
import NasaPlaceholder from '@/assets/images/nasa-placeholder.jpg'
import { truncate } from '@/lib/utils'

export const ArticleCard = ({
  url,
  title,
  published_at,
  image_url,
  summary,
  news_site,
}: Article) => {
  const date = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(published_at))

  return (
    <Link to={url} target="_blank">
      <Card className="flex flex-col h-full">
        <Image
          alt={title}
          src={image_url || NasaPlaceholder}
          height={400}
          width={400}
          className="object-cover w-full object-center h-80 rounded-t-xl"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null // prevents looping
            currentTarget.src = NasaPlaceholder
          }}
        />
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>

        <CardContent className="text-base leading-relaxed flex-1">
          <p>{truncate(summary, 110)}</p>
        </CardContent>
        <CardFooter className="mt-auto flex justify-between text-sm">
          <span className="text-sm">{news_site}</span>
          <span>{date}</span>
        </CardFooter>
      </Card>
    </Link>
  )
}
