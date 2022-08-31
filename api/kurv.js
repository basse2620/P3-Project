class Kurv{
    constructor(PK_kurvId,FK_brugernavn,totalPris){
        this.PK_kurvId = PK_kurvId;
        this.FK_brugernavn = FK_brugernavn;
        this.totalPris = totalPris;
    }
}

module.exports = Kurv;