import { Genre } from "./genre";
import { SalgsFilm } from "./salgs-film";
import { SalgsFilmGenre } from "./salgs-film-genre";

export interface SalgsFilmGenreSam extends SalgsFilm, SalgsFilmGenre, Genre {
}
