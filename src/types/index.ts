export type ApiResponse = {
  name: string
  id: number
  latitude: number
  longitude: number
  altitude: number
  velocity: number
  visibility: 'daylight' | 'eclipsed'
  footprint: number
  timestamp: number
  daynum: number
  solar_lat: number
  solar_lon: number
  units: 'kilometers' | 'miles'
}

export type Article = {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date
}

export type ArticleList = {
  count: number
  results: Article[]
}

type Country = {
  id: number
  name: string
  alpha_2_code: string
  alpha_3_code: string
  nationality_name: string
  nationality_name_composed: string
}

export type Crew = {
  id: number
  name: string
  wiki: string | null
  image: {
    image_url: string | null
  }
  nationality: Country[]
  flights_count: number
  landings_count: number
  spacewalks_count: number
  bio: string
}

export type CrewList = {
  count: number
  results: Crew[]
}

export type WikiResponse = {
  pageid: number
  ns: number
  title: string
  extract: string
}
