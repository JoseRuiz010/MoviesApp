import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import { moviesNowPlayingUseCase } from "../../core/uses-cases/movies/now-playing.use-case.ts"
import { moviesAdapter } from "../../config/adapters/movieDbFetcher"
import { popularUseCase, topRatedUseCase, upcomingUseCase } from "../../core/uses-cases/index.ts"

let popularPageNumber = 1;
export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([])
  const [pupular, setpupular] = useState<Movie[]>([])
  const [topRated, settopRated] = useState<Movie[]>([])
  const [upcoming, setupcoming] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingPromise = await moviesNowPlayingUseCase(moviesAdapter);
    const popularPromise = await popularUseCase(moviesAdapter);
    const topRatedPromise = await topRatedUseCase(moviesAdapter);
    const upComingPromise = await upcomingUseCase(moviesAdapter);
    const [
      nowplayingMovies,
      popularMovies,
      topRatedMovie,
      upcomingMovie
    ] = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise])
    setnowPlaying(nowplayingMovies);
    setpupular(popularMovies);
    settopRated(topRatedMovie);
    setupcoming(upcomingMovie);

    setIsLoading(false)

  }

  return {
    isLoading, nowPlaying, pupular, topRated, upcoming,
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await popularUseCase(moviesAdapter, {
        page: popularPageNumber
      })
      setpupular(prev => [...prev, ...popularMovies])
    }
  }
}