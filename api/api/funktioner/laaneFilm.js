var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle laane film
async function getLaaneFilm() {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request().query("SELECT * from LaaneFilm");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter 1 specifik laane film på filmen id
async function getLaaneFilmen(filmId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('filmId', sql.Int, filmId)
            .query("SELECT * from LaaneFilm where PK_filmId = @filmId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alle laane film med en specifik genre på genrens id
async function getLaaneFilmG(genreId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('genreId', sql.Int, genreId)
            .query("SELECT * from LaaneFilm as lf \
                Inner Join LaaneFilmGenre as lfg \
                on lf.PK_filmId = lfg.FK_filmId \
                Inner Join Genre as g \
                on lfg.FK_genreId = g.PK_genreId \
                where g.PK_genreId = @genreId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alle laane film med en specifik instruktoer på instruktoerens id
async function getLaaneFilmI(instruktoerId) {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .input('instruktoerId', sql.Int, instruktoerId)
            .query("SELECT * from LaaneFilm as lf \
        Inner Join LaaneFilmInstruktoer as lfi \
        on lf.PK_filmId = lfi.FK_filmId \
        Inner Join Instruktoer as i \
        on lfi.FK_instruktoerId = i.PK_instruktoerId \
        where i.PK_instruktoerId = @instruktoerId");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer en laane film
async function addLaaneFilm(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let insertFilm = await pool.request()
            .input('filmNavn', sql.NVarChar, laaneFilm.filmNavn)
            .input('pris', sql.Decimal, laaneFilm.pris)
            .input('rabat', sql.Decimal, laaneFilm.rabat)
            .input('maengde', sql.Int, laaneFilm.maengde)
            .input('udlaant', sql.Int, laaneFilm.udlaant)
            .input('resevert', sql.Int, laaneFilm.resevert)
            .query("Insert Into LaaneFilm (filmNavn, pris, rabat, maengde, udlaant, resevert) \
        Values (@filmNavn, @pris, @rabat, @maengde, @udlaant, @resevert)");
        return insertFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere prisen på en laane film
async function updateLaaneFilmPris(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('pris', sql.Decimal, laaneFilm.pris)
            .query("Update LaaneFilm Set pris = @pris Where PK_filmId = @filmId \
                    Update LaaneKurv Set pris = @pris Where FK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere rabaten på en laane film
async function updateLaaneFilmRabat(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('rabat', sql.Decimal, laaneFilm.rabat)
            .query("Update LaaneFilm Set rabat = @rabat Where PK_filmId = @filmId \
                    Update LaaneKurv Set rabat = @rabat Where FK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere rabaten på alle laane film
async function updateLaaneFilmRabatA(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('rabat', sql.Decimal, laaneFilm.rabat)
            .query("Update LaaneFilm Set rabat = @rabat \
                    Update LaaneKurv Set rabat = @rabat");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere maengden af laane film
async function updateLaaneFilmMaengde(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('maengde', sql.Int, laaneFilm.maengde)
            .query("Update LaaneFilm Set maengde = @maengde Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere hvor mange laane film er udlaant
async function updateLaaneFilmUdlaant(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('udlaant', sql.Int, laaneFilm.udlaant)
            .query("Update LaaneFilm Set udlaant = @udlaant Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere hvor mange laane film der er resevert
async function updateLaaneFilmResevert(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('resevert', sql.Int, laaneFilm.resevert)
            .query("Update LaaneFilm Set resevert = @resevert Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// updatere den forventede dato man kan laane en film igen
async function updateLaaneFilmForventet(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let updateFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .input('forventet', sql.Date, laaneFilm.forventet)
            .query("Update LaaneFilm Set forventetDato = @forventet Where PK_filmId = @filmId");
        return updateFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function deleteLaaneFilm(laaneFilm) {
    try {
        let pool = await sql.connect(config);
        let deleteFilm = await pool.request()
            .input('filmId', sql.Int, laaneFilm.filmId)
            .query("Delete From LaaneFilm where PK_filmId = @filmId");
        return deleteFilm.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getLaaneFilm: getLaaneFilm,
    getLaaneFilmen: getLaaneFilmen,
    getLaaneFilmG: getLaaneFilmG,
    getLaaneFilmI: getLaaneFilmI,
    addLaaneFilm: addLaaneFilm,
    updateLaaneFilmPris: updateLaaneFilmPris,
    updateLaaneFilmRabat: updateLaaneFilmRabat,
    updateLaaneFilmRabatA: updateLaaneFilmRabatA,
    updateLaaneFilmMaengde: updateLaaneFilmMaengde,
    updateLaaneFilmResevert: updateLaaneFilmResevert,
    updateLaaneFilmUdlaant: updateLaaneFilmUdlaant,
    updateLaaneFilmForventet: updateLaaneFilmForventet,
    deleteLaaneFilm: deleteLaaneFilm
}