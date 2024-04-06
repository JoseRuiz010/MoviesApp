import { useEffect, useState } from "react"
import { ResponseMovie } from "../../infraestructura/interfaces/movie-db.responses"
import { getMovieByIDUseCase } from "../../core/uses-cases/movies/getMoviById.use-case"
import { moviesAdapter } from "../../config/adapters/movieDbFetcher"
import { FullMovie } from "../../core/entities/movie.entity"
import { getMovieCast } from "../../core/uses-cases/movies/getc-cast.use-case"
import { Cast } from "../../core/entities/cast.entitty"

export const useMovie = (movieID: number) => {
  const [isLoading, setisLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie>()
  const [casts, setcasts] = useState<Cast[]>()
  useEffect(() => {

    loaDMovie()
  }, [movieID])


  async function loaDMovie() {
    setisLoading(true)
    const moviePromise = await getMovieByIDUseCase(moviesAdapter, movieID)
    const castsPromise = await getMovieCast(moviesAdapter, movieID)
    const [fullMovie, cast] = await Promise.all([moviePromise, castsPromise])
    setMovie(fullMovie)
    setcasts(cast)
    setisLoading(false)
  }


  return { movie, casts, isLoading }

}

