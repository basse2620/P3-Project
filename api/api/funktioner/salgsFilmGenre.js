var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Gemmer salgs film genre mellem table data
async function addSalgsFilmGenre(salgsFilmGenre) {
    try {
        let pool = await sql.connect(config);
        let insertFilmGenre = await pool.request()
            .input('filmId', sql.Int, salgsFilmGenre.filmId)
            .input('genreId', sql.Int, salgsFilmGenre.genreId)
            .query("Insert Into SalgsFilmGenre (FK_filmId, FK_genreId) \
      Values (@filmId, @genreId)");
        return insertFilmGenre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addSalgsFilmGenre: addSalgsFilmGenre,
}