class LaaneKurv{
    constructor(FK_ordreId,FK_filmId,pris,rabat,totalPris,udlaansDato,returDato,FK_statusId){
        this.FK_ordreId = FK_ordreId;
        this.FK_filmId = FK_filmId;
        this.pris = pris;
        this.rabat = rabat;
        this.totalPris = totalPris;
        this.udlaansDato = udlaansDato;
        this.returDato = returDato;
        this.FK_statusId = FK_statusId;
    }
}

module.exports = LaaneKurv;