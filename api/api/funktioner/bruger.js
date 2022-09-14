var config = require('../../dbconfig');
const sql = require('mssql');
const { password } = require('../../dbconfig');

//Henter allet  Brugere
async function getBrugere() {
  try {
    let pool = await sql.connect(config);
    let brugere = await pool.request().query("SELECT * from Bruger");
    return brugere.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alt data fra en specifik bruger på deres brugernavn
async function getBruger(brugernavn, password) {
  try {
    let pool = await sql.connect(config);
    let brugere = await pool.request()
      .input('brugernavn', sql.NVarChar, brugernavn)
      .input('password', sql.NVarChar, password)
      .query("SELECT * from Bruger where PK_brugernavn = @brugernavn and [password] = @password");
    return brugere.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en bruger
async function addBruger(bruger) {
  try {
    let pool = await sql.connect(config);
    let insertBrugere = await pool.request()
      .input('brugernavn', sql.NVarChar, bruger.brugernavn)
      .input('password', sql.NVarChar, bruger.password)
      .input('fornavn', sql.NVarChar, bruger.fornavn)
      .input('efternavn', sql.NVarChar, bruger.efternavn)
      .input('salgsScore', sql.Decimal, bruger.salgsScore)
      .input('addresseId', sql.Int, bruger.addresseId)
      .input('kortNr', sql.BigInt, bruger.kortNr)
      .input('typeId', sql.Int, bruger.typeId)
      .query("Insert Into Bruger (PK_brugernavn, [password], fornavn, efternavn, salgsScore, FK_addresseId, FK_kortNr, FK_typeId) \
        Values (@brugernavn, @password, @password, @fornavn, @efternavn, @salgsScore, @addresseId, @kortNr, @typeId)");
    return insertBrugere.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Skifter password på en bruger
async function updateBruger(bruger) {
  try {
    let pool = await sql.connect(config);
    let updateBruger = await pool.request()
      .input('brugernavn', sql.NVarChar, bruger.brugernavn)
      .input('password', sql.NVarChar, bruger.password)
      .input('newPassword', sql.NVarChar, bruger.newPassword)
      .query("Update Bruger Set password = @newPassword Where PK_brugernavn = @brugernavn");
    return updateBruger.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteBruger(bruger) {
  try {
    let pool = await sql.connect(config);
    let deleteBruger = await pool.request()
      .input('brugernavn', sql.NVarChar, bruger.brugernavn)
      .input('password', sql.NVarChar, bruger.password)
      .query("Delete From bruger where PK_brugernavn = @brugernavn And password = @brugernavn");
    return deleteBruger.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getBrugere: getBrugere,
  getBruger: getBruger,
  addBruger: addBruger,
  updateBruger: updateBruger,
  deleteBruger: deleteBruger
}