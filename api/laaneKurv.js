class LaaneKurv {
    constructor(FK_kurvId, FK_filmId, pris, rabat, totalPris) {
        this.FK_kurvId = FK_kurvId;
        this.FK_filmId = FK_filmId;
        this.pris = pris;
        this.rabat = rabat;
        this.totalPris = totalPris;
    }
}

module.exports = LaaneKurv;