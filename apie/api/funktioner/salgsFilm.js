var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle salgs film
async function getSalgsFilm() {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request().query("SELECT * from salgsFilm");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter en specifik sagls film på dets id
async function getSalgsFilmen(filmId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT * from SalgsFilm where PK_filmId = @filmId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alle salgs film med en specifik genre på genrens id
async function getSalgsFilmG(genreId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('genreId', sql.Int, genreId)
            .query("SELECT * from SalgsFilm as sf \
        Inner Join SalgsFilmGenre as sfg \
        on sf.PK_filmId = sfg.FK_filmId \
        Inner Join Genre as g \
        on sfg.FK_genreId = g.PK_genreId \
        where g.PK_genreId = @genreId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alle salgs film med en specifik instruktoer på instruktoerens id
async function getSalgsFilmI(instruktoerId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('instruktoerId', sql.Int, instruktoerId)
            .query("SELECT * from SalgsFilm as sf \
        Inner Join SalgsFilmInstruktoer as sfi \
        on sf.PK_filmId = sfg.FK_filmId \
        Inner Join Instruktoer as i \
        on sfi.FK_instruktoerId = i.PK_instruktoerId \
        where i.PK_instruktoerId = @instruktoerId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer en salgs film
async function addSalgsFilm(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let insertFilm = await pool.request()
            .input('filmNavn', sql.NVarChar, salgsFilm.filmNavn)
            .input('pris', sql.Decimal, salgsFilm.pris)
            .input('rabat', sql.Decimal, salgsFilm.rabat)
            .input('stand', sql.Int, salgsFilm.stand)
            .query("Insert Into SalgsFilm (filmNavn, pris, rabat, stand) \
        Values (@filmNavn, @pris, @rabat, stand)");
        return insertFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en salgs films pris
async function updateSalgsFilmPris(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, salgsFilm.filmId)
            .input('pris', sql.Decimal, salgsFilm.pris)
            .query("Update SalgsFilm Set pris = @pris Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en salgs films rabat
async function updateSalgsFilmRabat(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, salgsFilm.filmId)
            .input('rabat', sql.Decimal, salgsFilm.rabat)
            .query("Update SalgsFilm Set rabat = @rabat Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere alle salgs films rabat
async function updateSalgsFilmRabatA(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, salgsFilm.filmId)
            .input('rabat', sql.Decimal, salgsFilm.rabat)
            .query("Update SalgsFilm Set rabat = @rabat");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en salgs films stand
async function updateSalgsFilmStand(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, salgsFilm.filmId)
            .input('stand', sql.Int, salgsFilm.stand)
            .query("Update SalgsFilm Set stand = @stand Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteSalgsFilm(salgsFilm) {
    try {
        let pool = await sql.connect(config);
        let deleteSalgsFilm = await pool.request()
            .input('filmId', sql.Int, salgsKurv.filmId)
            .query("Delete From SalgsFilm where FK_filmId = @filmId");
        return deleteSalgsFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSalgsFilm: getSalgsFilm,
    getSalgsFilmen: getSalgsFilmen,
    getSalgsFilmG: getSalgsFilmG,
    getSalgsFilmI: getSalgsFilmI,
    addSalgsFilm: addSalgsFilm,
    updateSalgsFilmPris: updateSalgsFilmPris,
    updateSalgsFilmRabat: updateSalgsFilmRabat,
    updateSalgsFilmRabatA: updateSalgsFilmRabatA,
    updateSalgsFilmStand: updateSalgsFilmStand,
    deleteSalgsFilm: deleteSalgsFilm,
}