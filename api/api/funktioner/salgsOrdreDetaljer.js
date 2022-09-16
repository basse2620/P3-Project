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
            .input('maengde', sql.Int, salgsOrdreDetaljer.maengde)
            .query("Insert Into SalgsOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, maengde) \
        Values (@ordreId, @filmId, @pris, @rabat, @maengde)");
        return insertSaglsOrdre.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

// Updatere laane ordre detaljer
async function updateSalgsOrdreDetaljer(salgsOrdreDetaljer) {
    try {
        let pool = await sql.connect(config);
        let updateSaglsOrdre = await pool.request()
            .input('ordreId', sql.Int, salgsOrdreDetaljer.ordreId)
            .input('statusId', sql.Int, salgsOrdreDetaljer.statusId)
            .query("Update salgsOrdreDetaljer Set FK_statusId = @statusId Where FK_ordreId = @ordreId");
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