class SalgsFilm {
    constructor(PK_filmId, filmNavn, pris, rabat, stand) {
        this.PK_filmId = PK_filmId;
        this.filmNavn = filmNavn;
        this.pris = pris;
        this.rabat = rabat;
        this.stand = stand;
    }
}

module.exports = SalgsFilm;