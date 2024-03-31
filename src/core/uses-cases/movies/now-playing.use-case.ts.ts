import { AxiosAdapter } from "../../../config/adapters/Http/axios-.adapter"
import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter"
import { NowPlayingResponse } from "../../../infraestructura/interfaces/movie-db.responses";
import { movieMapper } from "../../../infraestructura/mapper/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log(nowPlaying);
    return nowPlaying.results.map(movieMapper.formMovieDBResultToEntity);
  } catch (error) {
    console.log({ error });
    throw new Error('Errror fetchinng movies-nowplaying')
  }
}
