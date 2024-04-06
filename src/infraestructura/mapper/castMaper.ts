import { Cast } from "../../core/entities/cast.entitty";
import { movieDBCast } from "../interfaces/movie-db.responses";

export class CastMaper {
  static fromMoovieDbCastToEntity(actor: movieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'no character',
      avatar: actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : 'https//i.stack.imgur.com/l60Hf.png'
    }
  }

}