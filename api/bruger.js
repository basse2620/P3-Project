class Bruger{
    constructor(PK_brugernavn,password,fornavn,efternavn,saglsScore,FK_addresseId,FK_kortNr,FK_typeId){
        this.PK_brugernavn = PK_brugernavn;
        this.password = password;
        this.fornavn = fornavn;
        this.efternavn = efternavn;
        this.saglsScore = saglsScore;
        this.FK_addresseId = FK_addresseId;
        this.FK_kortNr = FK_kortNr;
        this.FK_typeId = FK_typeId;
    }
}

module.exports = Bruger;