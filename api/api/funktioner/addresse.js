var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

// Henter alle addressers data
async function getAddresse() {
  try {
    let pool = await sql.connect(config); // Opretter forbindelse til data basen med dataen fra config fillen
    let addresse = await pool.request()
      .query("SELECT * from Addresse"); // Sql forespørgsel
    return addresse.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter 1 specifik addresses data på addressens id
async function getAddresseId(addresseId) {
  try {
    let pool = await sql.connect(config); // Opretter forbindelse til data basen med dataen fra config fillen
    let addresse = await pool.request()
      .input('addresseId', sql.Int, addresseId) // Input fra brugeren
      .query("SELECT * from Addresse where PK_addresseId = @addresseId"); // Sql forespørgsel
    return addresse.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle addresser der har det intastede Post Nr
async function getAddressePostNr(postNr) {
  try {
    let pool = await sql.connect(config);
    let addresse = await pool.request()
      .input('postNr', sql.Int, postNr)
      .query("SELECT * from Addresse where FK_postNr = @postNr");
    return addresse.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en addresse
async function addAddresse(addresse) {
  try {
    let pool = await sql.connect(config);
    let insertAddresse = await pool.request()
      .input('addresse', sql.NVarChar, addresse.addresse)
      .input('postNr', sql.Int, addresse.postNr)
      .query("Insert Into Addresse (addresse, FK_postNr) Values (@addresse, @postNr)");
    return insertAddresse.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere dataen i en addresse
async function updateAddresse(addresse) {
  try {
    let pool = await sql.connect(config);
    let updateAddresse = await pool.request()
      .input('addresseId', sql.Int, addresse.addresseId)
      .input('addresse', sql.NVarChar, addresse.addresse)
      .input('postNr', sql.Int, addresse.postNr)
      .query("Update Addresse Set addresse = @addresse, FK_postNr = @postNr Where PK_addresseId = @addresseId");
    return updateAddresse.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getAddresse: getAddresse,
  getAddresseId: getAddresseId,
  getAddressePostNr: getAddressePostNr,
  addAddresse: addAddresse,
  updateAddresse: updateAddresse
}