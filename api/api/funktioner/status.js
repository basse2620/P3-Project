var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter status
async function getStatus() {
    try {
        let pool = await sql.connect(config);
        let film = await pool.request()
            .query("SELECT * from Status");
        return film.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getStatus: getStatus
}