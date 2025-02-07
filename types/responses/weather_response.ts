// https://openweathermap.org/weather-conditions
export enum CodeIcon {
  '01d' = '01d',
  '02d' = '02d',
  '03d' = '03d',
  '04d' = '04d',
  '09d' = '09d',
  '10d' = '10d',
  '11d' = '11d',
  '13d' = '13d',
  '50d' = '50d',
  '01n' = '01n',
  '02n' = '02n',
  '03n' = '03n',
  '04n' = '04n',
  '09n' = '09n',
  '10n' = '10n',
  '11n' = '11n',
  '13n' = '13n',
  '50n' = '50n',
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: CodeIcon
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export interface Wind {
  speed: number
  deg: number
  gust: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type ResponseWeather = {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}
