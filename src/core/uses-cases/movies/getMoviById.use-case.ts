import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter";
import { ResponseMovie, Result } from "../../../infraestructura/interfaces/movie-db.responses";
import { movieMapper } from "../../../infraestructura/mapper/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getMovieByIDUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

  try {
    const movie = await fetcher.get<ResponseMovie>(`/${movieId}`);
    console.log(movie);
    return movieMapper.formMovieDBResultToFullMovie(movie)

  } catch (error) {
    throw new Error('no se pudo obtener la pelicula conm el id =' + movieId)
  }
}
