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

// Henter en alle genre der har forbinelser til en laane film
async function getGenreLaaneFilm(filmId) {
    try {
        let pool = await sql.connect(config);
        let genre = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT g.PK_genreId as genreId, g.genre \
                from Genre As g \
                Inner Join LaaneFilmGenre As lfg \
                on g.PK_genreId = lfg.FK_genreId \
                Inner Join LaaneFilm As lf \
                on lfg.FK_filmId = lf.PK_filmId \
                where lf.PK_filmId = @filmId");
        return genre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en alle genre der har forbinelser til en salgs film
async function getGenreSalgsFilm(filmId) {
    try {
        let pool = await sql.connect(config);
        let genre = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT g.PK_genreId as genreId, g.genre \
                from Genre As g \
                Inner Join SalgsFilmGenre As sfg \
                on g.PK_genreId = sfg.FK_genreId \
                Inner Join SalgsFilm As sf \
                on sfg.FK_filmId = sf.PK_filmId \
                where sf.PK_filmId = @filmId");
        return genre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getGenre: getGenre,
    getGenren: getGenren,
    getGenreLaaneFilm: getGenreLaaneFilm,
    getGenreSalgsFilm: getGenreSalgsFilm
}