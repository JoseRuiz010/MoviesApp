import { HttpAdapter } from "../../../config/adapters/Http/Http.adapter"
import { MovieDBCastResponse } from "../../../infraestructura/interfaces/movie-db.responses"
import { CastMaper } from "../../../infraestructura/mapper/castMaper";
import { Cast } from "../../entities/cast.entitty";


export const getMovieCast = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(`/${movieId}/credits`);
    const actors = cast.map(actor => CastMaper.fromMoovieDbCastToEntity(actor));
    return actors;
  } catch (error) {
    throw new Error('Cannot get movie cast ' + movieId)
  }
}
