class KreditKort{
    constructor(PK_kortNr,cvc,kortholder,udloebsDato,saldo){
    this.PK_kortNr = PK_kortNr;
    this.cvc = cvc;
    this.kortholder = kortholder;
    this.udloebsDato = udloebsDato;
    this.saldo = saldo;
    }
}
module.exports = KreditKort;