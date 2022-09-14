class LaaneFilm {
    constructor(PK_filmId, filmNavn, pris, rabat, meangde, udlaant, resevert, forventetDato) {
        this.PK_filmId = PK_filmId;
        this.filmNavn = filmNavn;
        this.pris = pris;
        this.rabat = rabat;
        this.meangde = meangde;
        this.udlaant = udlaant;
        this.FK_kortNr = resevert;
        this.forventetDato = forventetDato;
    }
}

module.exports = LaaneFilm;