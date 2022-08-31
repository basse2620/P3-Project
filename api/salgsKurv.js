class SalgsKurv{
    constructor(FK_kurvId,FK_filmId,pris,rabat,meangde,totalPris){
        this.FK_kurvId = FK_kurvId;
        this.FK_filmId = FK_filmId;
        this.pris = pris;
        this.rabat = rabat;
        this.meangde = meangde;
        this.totalPris = totalPris;
    }
}

module.exports = SalgsKurv;