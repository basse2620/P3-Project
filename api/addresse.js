class Addresse {
    constructor(PK_addresseId, addresse, FK_postNr) {
        this.PK_addresseId = PK_addresseId;
        this.addresse = addresse;
        this.FK_postNr = FK_postNr;

    }
}

module.exports = Addresse;