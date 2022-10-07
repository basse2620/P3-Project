var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter sagls billedere der inholder en specifik films id
async function getSalgsBillede(filmId) {
    try {
        let pool = await sql.connect(config);
        let billede = await pool.request()
            .input('filmId'.sql.Int, filmId)
            .query("Select * From SalgsBilleder where FK_filmId = @filmId");
        return billede.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

// Gemmer et salgs billede
async function addSalgsBillede(salgsBillede) {
    try {
        let pool = await sql.connect(config);
        let insertBillede = await pool.request()
            .input('filmId', sql.Int, laanebillede.filmId)
            .input('link', sql.NVarChar, laanebillede.link)
            .input('beskrivelse', sql.NVarChar, laanebillede.beskrivelse)
            .query("Insert Into Kurv (FK_filmId, link, beskrivelse) Values (@filmId, @link, @beskrivelse)");
        return insertBillede.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getSalgsBillede: getSalgsBillede,
    addSalgsBillede: addSalgsBillede
}