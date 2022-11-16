import { Genre } from "./genre";
import { LaaneFilm } from "./laane-film";
import { LaaneFilmGenre } from "./laane-film-genre";

export interface LaaneFilmGenreSam extends LaaneFilm, LaaneFilmGenre, Genre {
}
