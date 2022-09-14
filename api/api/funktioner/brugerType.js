var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter bruger typper
async function getBrugerType() {
  try {
    let pool = await sql.connect(config);
    let BrugerType = await pool.request().query("SELECT * from BrugerType");
    return BrugerType.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getBrugerType: getBrugerType
}