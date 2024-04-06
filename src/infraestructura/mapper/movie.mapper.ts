import { FullMovie, Movie } from "../../core/entities/movie.entity";
import { ResponseMovie, Result } from "../interfaces/movie-db.responses";

export class movieMapper {
  static formMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`,
    };
  }
  static formMovieDBResultToFullMovie(result: ResponseMovie): FullMovie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`,
      geners: result.genres.map(v => v.name),
      productionCompanies: result.production_companies.map(v => v.name),
      budget: result.budget,
      duration: result.runtime,
      originalTitle: result.original_title
    };
  }
}