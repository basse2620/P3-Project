class Ordre {
    constructor(PK_ordreId, datoOprettet, datoSendt, totalPris, FK_statusId, FK_addresseId, FK_brugernavn) {
        this.PK_ordreId = PK_ordreId;
        this.datoOprettet = datoOprettet;
        this.datoSendt = datoSendt;
        this.totalPris = totalPris;
        this.FK_statusId = FK_statusId;
        this.FK_addresseId = FK_addresseId;
        this.FK_brugernavn = FK_brugernavn;
    }
}

module.exports = Ordre;