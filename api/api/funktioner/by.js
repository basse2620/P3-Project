var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle byger
async function getByer() {
  try {
    let pool = await sql.connect(config);
    let by = await pool.request().query("SELECT * from [By]");
    return by.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en specifik på på post nr
async function getBy(postNr) {
  try {
    let pool = await sql.connect(config);
    let by = await pool.request()
      .input('postNr', sql.Int, postNr)
      .query("SELECT * from [By] where PK_postNr = @posrNr");
    return by.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getByer: getByer,
  getBy: getBy
}