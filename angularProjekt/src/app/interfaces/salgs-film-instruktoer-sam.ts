import { Instruktoer } from "./instruktoer";
import { SalgsFilm } from "./salgs-film";
import { SalgsFilmInstruktoer } from "./salgs-film-instruktoer";

export interface SalgsFilmInstruktoerSam extends SalgsFilm, SalgsFilmInstruktoer, Instruktoer{
}
