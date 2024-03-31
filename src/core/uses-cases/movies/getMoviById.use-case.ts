import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIDUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

  try {
    fetcher.get(`/${movieId}`)

  } catch (error) {
    throw new Error('no se pudo obtener la pelicula conm el id =' + movieId)
  }
}
