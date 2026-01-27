import { Crew } from '@/types'
import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Image } from '@unpic/react'
import AstronautPlaceholder from '@/assets/images/astronaut-placeholder.jpg'
import { slugify } from '@/lib/utils'

export const AstronautCard = ({
  id,
  name,
  nationality,
  wiki,
  bio,
  image,
  flights_count,
  landings_count,
  spacewalks_count,
}: Crew) => {
  return (
    <Link
      to="/crew/$slug"
      params={{ slug: slugify(name) }}
      key={id}
      state={{
        crew: { name: name, wiki: wiki, bio: bio },
      }}
    >
      <Card className="flex flex-col h-full">
        <Image
          height={320}
          alt={name}
          src={image?.image_url || AstronautPlaceholder}
          aspectRatio={750 / 320}
          className="object-cover w-full object-center h-80 rounded-t-xl"
        />
        <CardHeader className="flex justify-between items-center">
          <h2>{name}</h2>
          <Image
            alt={nationality[0].name}
            src={`https://flagsapi.com/${nationality[0].alpha_2_code}/shiny/24.png`}
            height={24}
            width={24}
            className="h-6"
          />
        </CardHeader>
        <CardContent className="text-sm mt-auto">
          <p>
            Flights: <span>{flights_count}</span>
          </p>
          <p>
            Landings: <span>{landings_count}</span>
          </p>
          <p>
            Spacewalks: <span>{spacewalks_count}</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
