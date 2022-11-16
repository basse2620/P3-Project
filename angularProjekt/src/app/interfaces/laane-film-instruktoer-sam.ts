import { Instruktoer } from "./instruktoer";
import { LaaneFilm } from "./laane-film";
import { LaaneFilmInstruktoer } from "./laane-film-instruktoer";

export interface LaaneFilmInstruktoerSam extends LaaneFilm, LaaneFilmInstruktoer, Instruktoer{
}
