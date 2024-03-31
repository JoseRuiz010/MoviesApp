import { AxiosAdapter } from "../../../config/adapters/Http/axios-.adapter"
import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter"
import { MoviesDbResponse } from "../../../infraestructura/interfaces/movie-db.responses";
import { movieMapper } from "../../../infraestructura/mapper/movie.mapper";
import { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number,
  limit?: number
}

export const popularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MoviesDbResponse>('/popular', {
      params: {
        page: options?.page ?? 1
      }
    });
    console.log(popular);
    return popular.results.map(movieMapper.formMovieDBResultToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error('Errror fetchinng popular usescases')
  }
}
