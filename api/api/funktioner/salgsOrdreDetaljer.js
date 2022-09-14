var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter salgs ordre detaljer fra ordre id
async function getSaglsOrdreDetaljer(ordreId) {
    try {
        let pool = await sql.connect(config);
        let saglsOrdre = await pool.request()
            .input('ordreId', sql.Int, id)
            .query("SELECT * from SalgsOrdreDetaljer where FK_ordreId = @ordreId");
        return saglsOrdre.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// Gemmer salgs ordre detaljer
async function addSalgsOrdreDetaljer(salgsOrdreDetaljer) {
    try {
        let pool = await sql.connect(config);
        let insertSaglsOrdre = await pool.request()
            .input('ordreId', sql.Int, salgsOrdreDetaljer.kurvId)
            .input('filmId', sql.Int, salgsOrdreDetaljer.filmId)
            .input('pris', sql.Decimal, salgsOrdreDetaljer.pris)
            .input('rabat', sql.Decimal, salgsOrdreDetaljer.rabat)
            .input('meangde', sql.Int, salgsOrdreDetaljer.meangde)
            .query("Insert Into SalgsOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, meangde) \
        Values (@ordreId, @filmId, @pris, @rabat, @meangde)");
        return insertSaglsOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere laane ordre detaljer
async function updateSalgsOrdreDetaljer(laaneOrdreDetaljer) {
    try {
        let pool = await sql.connect(config);
        let updateSaglsOrdre = await pool.request()
            .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
            .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
            .query("Update LaaneOrdreDetaljer Set FK_statusId = @statusId Where FK_ordreId = @ordreId");
        return updateSaglsOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSaglsOrdreDetaljer: getSaglsOrdreDetaljer,
    addSalgsOrdreDetaljer: addSalgsOrdreDetaljer,
    updateSalgsOrdreDetaljer: updateSalgsOrdreDetaljer,
}