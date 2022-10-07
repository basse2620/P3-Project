var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle Genre
async function getGenre() {
    try {
        let pool = await sql.connect(config);
        let genre = await pool.request().query("SELECT * from Genre");
        return genre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en specifik genre på dets id
async function getGenren(genreId) {
    try {
        let pool = await sql.connect(config);
        let genre = await pool.request()
            .input('genreId', sql.Int, genreId)
            .query("SELECT * from Genre where PK_genreId = @genreId");
        return genre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en alle instruktoer der har forbinelser til en film
async function getGenreFilm(filmId) {
    try {
        let pool = await sql.connect(config);
        let genre = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT * from Genre As g \
        Inner Join LaaneFilmGenre As lfg \
        on g.PK_genreId = lfg.FK_genreId \
        Inner Join LaaneFilm As lf \
        on lfg.FK_filmId = PK_filmId \
        where lf.PK_film = @filmId");
        return genre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getGenre: getGenre,
    getGenren: getGenren,
    getGenreFilm: getGenreFilm
}