var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle instruktoere
async function getInstruktoer() {
    try {
        let pool = await sql.connect(config);
        let instruktoer = await pool.request().query("SELECT * from instruktoer");
        return instruktoer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en specifik instruktoer på instruktoerens id
async function getInstruktoerId(instruktoerId) {
    try {
        let pool = await sql.connect(config);
        let instruktoer = await pool.request()
            .input('instruktoerId', sql.Int, instruktoerId)
            .query("SELECT * from Instruktoer where PK_instruktoerId = @instruktoerId");
        return instruktoer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en alle instruktoer der har forbinelser til en film
async function getInstruktoerLaaneFilm(filmId) {
    try {
        let pool = await sql.connect(config);
        let instruktoer = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT i.PK_instruktoerId as instruktoerId, i.fornavn, i.efternavn \
                from Instruktoer As i \
                Inner Join LaaneFilmInstruktoer As lfi \
                on i.PK_instruktoerId = lfi.FK_instruktoerId \
                Inner Join LaaneFilm As lf \
                on lfi.FK_filmId = PK_filmId \
                where lf.PK_filmId = @filmId");
        return instruktoer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en alle instruktoer der har forbinelser til en film
async function getInstruktoerSalgsFilm(filmId) {
    try {
        let pool = await sql.connect(config);
        let instruktoer = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT i.PK_instruktoerId as instruktoerId, i.fornavn, i.efternavn \
                from Instruktoer As i \
                Inner Join SalgsFilmInstruktoer As sfi \
                on i.PK_instruktoerId = sfi.FK_instruktoerId \
                Inner Join SalgsFilm As lf \
                on sfi.FK_filmId = PK_filmId \
                where lf.PK_filmId = @filmId");
        return instruktoer.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer en Instruktoer
async function addInstruktoer(instruktoer) {
    try {
        let pool = await sql.connect(config);
        let insertInstruktoer = await pool.request()
            .input('fornavn', sql.NVarChar, instruktoer.fornavn)
            .input('efternavn', sql.NVarChar, instruktoer.efternavn)
            .query("Insert Into Instruktoer (fornavn, efternavn) Values (@fornavn, @efternavn)");
        return insertInstruktoer.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Upadatere en instruktoer på instruktoerens id
async function updateInstruktoer(instruktoer) {
    try {
        let pool = await sql.connect(config);
        let updateInstruktoer = await pool.request()
            .input('instruktoerId', sql.Int, instruktoer.instruktoerId)
            .input('fornavn', sql.NVarChar, instruktoer.fornavn)
            .input('efternavn', sql.NVarChar, instruktoer.efternavn)
            .query("Update Instruktoer Set fornavn = @fornavn, efternavn = @efternavn Where PK_instruktoerId = @instruktoerId");
        return updateInstruktoer.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getInstruktoer: getInstruktoer,
    getInstruktoerId: getInstruktoerId,
    getInstruktoerLaaneFilm: getInstruktoerLaaneFilm,
    getInstruktoerSalgsFilm: getInstruktoerSalgsFilm,
    addInstruktoer: addInstruktoer,
    updateInstruktoer: updateInstruktoer
}