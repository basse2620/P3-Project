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
            .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
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

module.exports = {
    getLaaneOrdreDetaljer: getLaaneOrdreDetaljer,
    addLaaneOrdreDetaljer: addLaaneOrdreDetaljer,
    updateLaaneOrdreDetaljer: updateLaaneOrdreDetaljer,
    updateLaaneOrdreDetaljer: updateLaaneOrdreDetaljer
}