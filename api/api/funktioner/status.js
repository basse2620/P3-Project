var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter status
async function getStatus() {
    try {
        let pool = await pool.request()
        let status = await pool.request()
            .query("Select * From Status");
        return status.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getStatus: getStatus
}