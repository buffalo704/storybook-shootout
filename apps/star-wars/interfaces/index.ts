export type Person = {
  id: string
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  gender: string
}

export type Movie = {
  id: string
  name: string
  releaseDate: string
  genres: string
  imdbRating: string
  overview: string
  runtime: string
  director: string
}
export type ResponseError = {
  message: string
}
