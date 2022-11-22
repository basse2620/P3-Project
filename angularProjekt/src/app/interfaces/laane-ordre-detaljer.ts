export interface LaaneOrdreDetaljer {
    FK_ordreId: number;
    FK_filmId: number;
    pris: number;
    rabat: number;
    totalPris: number;
    udlaansDato: Date;
    returDato: Date;
}