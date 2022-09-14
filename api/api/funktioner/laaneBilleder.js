var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle Laane Billedere med et specifik film id
async function getLaaneBillede(filmId) {
    try {
        let pool = await sql.connect(config);
        let billede = await pool.request()
            .input('filmId'.sql.Int, filmId)
            .query("Select * From LaaneBilledere where FK_filmId = @filmId");
        return billede.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

// Tilføjer et laane billede
async function addLaaneBillede(laaneBillede) {
    try {
        let pool = await sql.connect(config);
        let insertBillede = await pool.request()
            .input('filmId', sql.Int, laanebillede.filmId)
            .input('link', sql.NVarChar, laanebillede.link)
            .input('beskrivelse', sql.NVarChar, laanebillede.beskrivelse)
            .query("Insert Into LaaneBilledere (FK_filmId, link, beskrivelse) Values (@filmId, @link, @beskrivelse)");
        return insertBillede.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getLaaneBillede: getLaaneBillede,
    addLaaneBillede: addLaaneBillede
}