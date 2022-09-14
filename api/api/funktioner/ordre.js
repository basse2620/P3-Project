var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter laane ordre detaljer fra ordre id
async function getLaaneOrdreDetaljer(ordreId) {
    try {
        let pool = await sql.connect(config);
        let laaneOrdre = await pool.request()
            .input('ordreId', sql.Int, id)
            .query("SELECT * from LaaneOrdreDetaljer where FK_ordreId = @ordreId");
        return laaneOrdre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Gemmer laane ordre detaljer
async function addLaaneOrdreDetaljer(laaneOrdreDetaljer) {
    try {
        let pool = await sql.connect(config);
        let insertLaaneOrdre = await pool.request()
            .input('ordreId', sql.Int, laaneOrdreDetaljer.kurvId)
            .input('filmId', sql.Int, laaneOrdreDetaljer.filmId)
            .input('pris', sql.Decimal, laaneOrdreDetaljer.pris)
            .input('rabat', sql.Decimal, laaneOrdreDetaljer.rabat)
            .input('udlaansDato', sq.DateTime, laaneOrdreDetaljer.udlaabsDato)
            .input('returDato', sql.DateTime, laaneOrdreDetaljer.returDato)
            .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
            .query("Insert Into LaaneOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, udlaansDato, returDato, FK_statusId) \
        Values (@ordreId, @filmId, @pris, @rabat, @udlaansDato, @returDato, @statusId)");
        return insertLaaneOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere laane ordre detaljer
async function updateLaaneOrdreDetaljer(laaneOrdreDetaljer) {
    try {
        let pool = await sql.connect(config);
        let updateLaaneOrdre = await pool.request()
            .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
            .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
            .query("Update LaaneOrdreDetaljer Set FK_statusId = @statusId Where FK_ordreId = @ordreId");
        return updateLaaneOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Ordre Funktioner

// Henter alle ordre
async function getOrdrer() {
    try {
        let pool = await sql.connect(config);
        let ordre = await pool.request().query("SELECT * from Ordre");
        return ordre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alle ordre for en bruger
async function getOrdre(brugernavn) {
    try {
        let pool = await sql.connect(config);
        let ordre = await pool.request()
            .input('brugernavn', sql.NVarChar, brugernavn)
            .query("SELECT * from Ordre where FK_brugernavn = @brugernavn");
        return ordre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Henter alt fra en ordre
async function getOrdreId(ordreId) {
    try {
        let pool = await sql.connect(config);
        let ordre = await pool.request()
            .input('ordreId', sql.Int, ordreId)
            .query("Select * From Ordre where PK_ordreId = @ordreId");
        return ordre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Gemmer en ordre
async function addOrdre(ordre) {
    try {
        let pool = await sql.connect(config);
        let insertOrdre = await pool.request()
            .input('totalPris', sql.Decimal, ordre.totalPris)
            .input('statusId', sql.Int, ordre.statusId)
            .input('addresseId', sql.Int, ordre.addresseId)
            .input('brugernavn', sql.NVarChar, ordre.brugernavn)
            .query("Insert Into Ordre (totalPris, FK_statusId, FK_addresseId, FK_brugernavn) \
        Values (@totalPris, @statusId, @addresseId, @brugernavn)");
        return insertOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en ordres dato sendt og status
async function updateOrdre(ordre) {
    try {
        let pool = await sql.connect(config);
        let updateOrdre = await pool.request()
            .input('datoSendt', sql.DateTime, ordre.datoSendt)
            .input('statusId', sql.Int, ordre.statusId)
            .input('ordreId', sql.NVarChar, ordre.ordreId)
            .query("Update Ordre Set datoSendt = @datoSendt, FK_statusId = @statusId Where PK_ordreId = @ordreId");
        return updateOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere en ordres status
async function updateOrdreStatus(ordre) {
    try {
        let pool = await sql.connect(config);
        let updateOrdre = await pool.request()
            .input('datoSendt', sql.DateTime, ordre.datoSendt)
            .input('statusId', sql.Int, ordre.statusId)
            .input('ordreId', sql.NVarChar, ordre.ordreId)
            .query("Update Ordre Set FK_statusId = @statusId Where PK_ordreId = @ordreId");
        return updateOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrdrer: getOrdrer,
    getOrdre: getOrdre,
    getOrdreId: getOrdreId,
    addOrdre: addOrdre,
    updateOrdre: updateOrdre,
    updateOrdreStatus: updateOrdreStatus
}