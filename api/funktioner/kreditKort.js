var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter saldo på et Kredit Kort på det kort nr og cvc
async function getKreditKort(kortNr, cvc) {
    try {
        let pool = await sql.connect(config);
        let kort = await pool.request()
            .input('kortNr', sql.BigInt, kortNr)
            .input('cvc', sql.Int, cvc)
            .query("Select saldo From KreditKort where PK_kortNr = @kortNr and cvc = @cvc");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer et kredit kort
async function addKreditKort(kreditKort) {
    try {
        let pool = await sql.connect(config);
        let insertKort = await pool.request()
            .input('kortNr', sql.BigInt, kreditKort.kortNr)
            .input('cvc', sql.Int, kreditKort.cvc)
            .input('kortholder', sql.NVarChar, kreditKort.kortholder)
            .input('udloebsDato', sql.Date, kreditKort.udloebsDato)
            .input('saldo', sql.Decimal, kreditKort.saldo)
            .query("Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato, saldo) Values (@kortNr, @cvc, @kortholder, @udloebsDato, @saldo)");
        return insertKort.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere saldoen på et kredit kort vis kort nr og cvc er tastet ind
async function updateKreditKortSaldo(kreditKort) {
    try {
        let pool = await sql.connect(config);
        let updateKort = await pool.request()
            .input('kortNr', sql.BigInt, kreditKort.kortNr)
            .input('cvc', sql.Int, kreditKort.cvc)
            .input('saldo', sql.Decimal, kreditKort.saldo)
            .query("Update KreditKort Set saldo = @saldo Where PK_kortNr = @kortNr And cvc = @cvc");
        return updateKort.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Sletter et kredit kort 
async function deleteKreditKort(kreditKort) {
    try {
        let pool = await sql.connect(config);
        let deleteKort = await pool.request()
            .input('kortNr', sql.BigInt, kreditKort.kortNr)
            .input('cvc', sql.Int, kreditKort.cvc)
            .input('kortholder', sql.NVarChar, kreditKort.kortholder)
            .query("Delete From KreditKort where PK_kortNr = @kortNr And cvc = @cvc And kortholder = @kortholder");
        return deleteKort.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKreditKort: getKreditKort,
    addKreditKort: addKreditKort,
    updateKreditKortSaldo: updateKreditKortSaldo,
    deleteKreditKort: deleteKreditKort
}