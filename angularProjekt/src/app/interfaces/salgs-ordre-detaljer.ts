import { SalgsFilm } from "./salgs-film";

export interface SalgsOrdreDetaljer extends SalgsFilm{
    FK_ordreId: number;
    FK_filmId: number;
    pris: number;
    rabat: number;
    maengde: number;
    totalPris: number;    
}
