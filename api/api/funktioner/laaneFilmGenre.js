var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Tilføjer mellem table data for en laane films genre
async function addLaaneFilmGenre(laaneFilmGenre) {
    try {
        let pool = await sql.connect(config);
        let insertFilmGenre = await pool.request()
            .input('filmId', sql.Int, laaneFilmGenre.filmId)
            .input('genreId', sql.Int, laaneFilmGenre.genreId)
            .query("Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) \
        Values (@filmId, @genreId)");
        return insertFilmGenre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    addLaaneFilmGenre: addLaaneFilmGenre
}