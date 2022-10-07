var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alt data fra en kurv der tilhøre en bruger
async function getKurv(brugernavn) {
    try {
        let pool = await sql.connect(config);
        let kurv = await pool.request()
            .input('brugernavn', sql.NVarChar, brugernavn)
            .query("Select * From Kurv where FK_brugernavn = @brugernavn");
        return kurv.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer en kurv
async function addKurv(kurv) {
    try {
        let pool = await sql.connect(config);
        let insertKurv = await pool.request()
            .input('brugernavn', sql.NVarChar, kurv.brugernavn)
            .input('totalPris', sql.Decimal, kreditKort.totalPris)
            .query("Insert Into Kurv (FK_brugernavn, totalPris) Values (@brugernavn, @totalPris)");
        return insertKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en kurv på brugers brugernavn
async function updateKurv(kurv) {
    try {
        let pool = await sql.connect(config);
        let updateKurv = await pool.request()
            .input('brugernavn', sql.NVarChar, kurv.brugernavn)
            .input('totalPris', sql.Decimal, kreditKort.totalPris)
            .query("Update Kurv Set totalPris = @totalPris Where FK_brugernavn = @brugernavn");
        return updateKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKurv: getKurv,
    addKurv: addKurv,
    updateKurv: updateKurv
}