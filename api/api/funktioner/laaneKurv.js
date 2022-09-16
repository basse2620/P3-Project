var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter laane delen af kurven
async function getLaaneKurv(kurvId) {
    try {
        let pool = await sql.connect(config);
        let laaneKurv = await pool.request()
            .input('kurvId', sql.NVarChar, kurvId)
            .query("SELECT * from LaaneKurv where FK_kurvId = @kurvId");
        return laaneKurv.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer laane kurv 
async function addLaaneKurv(laaneKurv) {
    try {
        let pool = await sql.connect(config);
        let insertLaaneKurv = await pool.request()
            .input('kurvId', sql.Int, laaneKurv.kurvId)
            .input('filmId', sql.Int, laaneKurv.filmId)
            .input('pris', sql.Decimal, laaneKurv.pris)
            .input('rabat', sql.Decimal, laaneKurv.rabat)
            .query("Insert Into LaaneKurv (FK_kurvId, FK_filmId, pris, rabat) \
        Values (@kurvId, @filmId, @pris, @rabat)");
        return insertLaaneKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere laane kurven
async function updateLaaneKurv(laaneKurv) {
    try {
        let pool = await sql.connect(config);
        let updateLaaneKurv = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('pris', sql.Decimal, laaneFilm.pris)
            .input('rabat', sql.Decimal, laaneKurv.rabat)
            .query("Update LaaneKurv Set pris = @pris, rabat = @rabat Where FK_kurvId = @kurvId");
        return updateLaaneKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Slettere lanne kurv
async function deleteLaaneKurv(laaneKurv) {
    try {
        let pool = await sql.connect(config);
        let deleteLaaneKurv = await pool.request()
            .input('kurvId', sql.Int, laaneKurv.kurvId)
            .input('filmId', sql.Int, laaneKurv.filmId)
            .query("Delete From LaaneKurv where FK_kurvId = @kurvId and FK_filmId = @filmId");
        return deleteLaaneKurv.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getLaaneKurv: getLaaneKurv,
    addLaaneKurv: addLaaneKurv,
    updateLaaneKurv: updateLaaneKurv,
    deleteLaaneKurv: deleteLaaneKurv
}