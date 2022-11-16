var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Tilføjer mellem table data for en laane films instruktoer
async function addLaaneFilmInstruktoer(laaneFilmInstruktoer) {
    try {
        let pool = await sql.connect(config);
        let insertFilmInstruktoer = await pool.request()
            .input('filmId', sql.Int, laaneFilmInstruktoer.filmId)
            .input('instruktoerId', sql.Int, laaneFilmInstruktoer.instruktoerId)
            .query("Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) \
        Values (@filmId, @instruktoerId)");
        return insertFilmInstruktoer.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addLaaneFilmInstruktoer: addLaaneFilmInstruktoer
}