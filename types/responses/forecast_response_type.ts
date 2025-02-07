import type { Coord, Main, Weather, Clouds, Wind } from '~/types/responses/weather_response_type'

export interface MainForecase extends Main {
  temp_kf: number
}

export interface Rain {
  [key: string]: number
}

export interface List {
  dt: number
  main: MainForecase
  weather: Weather[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  rain: Rain
  sys: { pod: string }
  dt_txt: string
}

export interface City {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export type ResponseForecast = {
  cod: string
  message: number
  cnt: number
  list: List[]
  city: City
}
