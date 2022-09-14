var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Gemmer salgs film intruktoer mellem table data
async function addSalgsFilmInstruktoer(salgsFilmInstruktoer) {
    try {
        let pool = await sql.connect(config);
        let insertFilmInstruktoer = await pool.request()
            .input('filmId', sql.Int, salgsFilmInstruktoer.filmId)
            .input('instruktoerId', sql.Int, salgsFilmInstruktoer.instruktoerId)
            .query("Insert Into SalgsFilmInstruktoer (FK_filmId, FK_instruktoerId) \
        Values (@filmId, @instruktoerId)");
        return insertFilmInstruktoer.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addSalgsFilmInstruktoer: addSalgsFilmInstruktoer,
}