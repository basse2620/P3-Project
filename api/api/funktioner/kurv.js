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

// Henter alt laane data fra en kurv der tilhøre en bruger
async function getKurvLaane(brugernavn) {
    try {
        let pool = await sql.connect(config);
        let kurv = await pool.request()
            .input('brugernavn', sql.NVarChar, brugernavn)
            .query("Select lf.filmnavn, lk.pris, lk.rabat, lk.totalpris, lb.link, lb.beskrivelse\
            From Kurv As k \
            Inner Join LaaneKurv as lk \
            on k.PK_kurvId = lk.FK_kurvId \
            Inner Join LaaneFilm as lf\
            on lk.FK_filmId = lf.PK_filmId \
            Inner Join LaaneBilledere as lb\
            on lf.PK_filmId = lb.FK_filmId\
            where k.FK_brugernavn = @brugernavn");
        return kurv.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alt salgs data fra en kurv der tilhøre en bruger
async function getKurvSalgs(brugernavn) {
    try {
        let pool = await sql.connect(config);
        let kurv = await pool.request()
            .input('brugernavn', sql.NVarChar, brugernavn)
            .query("Select sf.filmnavn, sk.pris, sk.rabat, sk.maengde, sk.totalpris, sb.link, sb.beskrivelse\
            From Kurv As k \
            Inner Join SalgsKurv as sk \
            on k.PK_kurvId = sk.FK_kurvId \
            Inner Join SalgsFilm as sf\
            on sk.FK_filmId = sf.PK_filmId \
            Inner Join SalgsBilledere as sb\
            on sf.PK_filmId = sb.FK_filmId\
            where k.FK_brugernavn = @brugernavn");
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
            .input('totalPris', sql.Decimal, kurv.totalPris)
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
            .input('totalPris', sql.Decimal, kurv.totalPris)
            .query("Update Kurv Set totalPris = @totalPris Where FK_brugernavn = @brugernavn");
        return updateKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getKurv: getKurv,
    getKurvLaane: getKurvLaane,
    getKurvSalgs: getKurvSalgs,
    addKurv: addKurv,
    updateKurv: updateKurv
}