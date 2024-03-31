import { AxiosAdapter } from "../../../config/adapters/Http/axios-.adapter"
import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter"
import { NowPlayingResponse } from "../../../infraestructura/interfaces/movie-db.responses";
import { movieMapper } from "../../../infraestructura/mapper/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const upcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const top_rated = await fetcher.get<NowPlayingResponse>('/upcoming');
    console.log(top_rated);
    return top_rated.results.map(movieMapper.formMovieDBResultToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error('Errror fetchinng movies-upcoming')
  }
}
