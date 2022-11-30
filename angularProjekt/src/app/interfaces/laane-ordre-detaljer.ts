import { LaaneFilm } from "./laane-film";
import { Status } from "./status";

export interface LaaneOrdreDetaljer extends LaaneFilm, Status{
    FK_ordreId: number;
    FK_filmId: number;
    pris: number;
    rabat: number;
    totalPris: number;
    udlaansDato: Date;
    returDato: Date;
}