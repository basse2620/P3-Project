var config = require('./dbconfig');
const sql = require('mssql');

async  function  getAddresse() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Addresse");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getAddresseId(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from Addresse where PK_addresseId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getAddressePostNr(postNr) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, postNr)
    .query("SELECT * from Addresse where FK_postNr = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addAddresse(addresse) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('addresse', sql.NVarChar, addresse.addresse)
    .input('FK_postNr', sql.Int, addresse.FK_postNr)
    .query("Insert Into Addresse (addresse, FK_postNr) Values (@addresse, @FK_postNr)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateAddresse(addresse) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_addresseId', sql.Int, addresse.PK_addresseId)
    .input('addresse', sql.NVarChar, addresse.addresse)
    .input('FK_postNr', sql.Int, addresse.FK_postNr)
    .query("Update Addresse Set addresse = @addresse, FK_postNr = @FK_postNr Where PK_addresseId = @PK_addresseId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getBrugere() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Bruger");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBruger(brugernavn) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.NVarChar, brugernavn)
    .query("SELECT * from Bruger where PK_brugernavn = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addBruger(bruger) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_brugernavn', sql.NVarChar, bruger.PK_brugernavn)
    .input('password', sql.NVarChar, bruger.password)
    .input('fornavn', sql.NVarChar, bruger.fornavn)
    .input('efternavn', sql.NVarChar, bruger.efternavn)
    .input('salgsScore', sql.Decimal, bruger.salgsScore)
    .input('FK_addresseId', sql.Int, bruger.FK_addresseId)
    .input('FK_kortNr', sql.BigInt, bruger.FK_kortNr)
    .input('FK_typeId', sql.Int, bruger.FK_typeId)
    .query("Insert Into Bruger (PK_brugernavn, [password], fornavn, efternavn, salgsScore, FK_addresseId, FK_kortNr, FK_typeId) \
    Values (@PK_brugernavn, @password, @password, @fornavn, @efternavn, @salgsScore, @FK_addresseId, @FK_kortNr, @FK_typeId)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  changeBrugerPassword(bruger) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_brugernavn', sql.NVarChar, bruger.PK_brugernavn)
    .input('password', sql.NVarChar, bruger.password)
    .query("Update Bruger Set password = @password Where PK_brugernavn = @PK_brugernavn");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  changeBrugerEmail(bruger) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_brugernavn', sql.NVarChar, bruger.PK_brugernavn)
    .input('email', sql.NVarChar, bruger.email)
    .query("Update Bruger Set email = @email Where PK_brugernavn = @PK_brugernavn");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getBrugerType() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from BrugerType");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBrugerType(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from BrugerType where PK_typeId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getByer() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from [By]");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getBy(postNr) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, postNr)
    .query("SELECT * from [By] where PK_postNr = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addBy(by) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('postNr', sql.Int, by.postNr)
    .input('byNavn', sql.NVarChar, by.byNavn)
    .execute('InsertOrders');
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getGenre() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Genre");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getGenre(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from Genre where PK_genreId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getInstuktoer() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Instuktoer");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getInstuktoer(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from Instuktoer where PK_instuktoerId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addInstuktoer(instuktoer) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('fornavn', sql.NVarChar, instuktoer.fornavn)
    .input('efternavn', sql.NVarChar, instuktoer.efternavn)
    .query("Insert Into Instruktoer (fornavn, efternavn) Values (@fornavn, @efternavn)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateInstuktoer(instuktoer) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_instruktoerId', sql.Int, instuktoer.PK_instruktoerId)
    .input('fornavn', sql.NVarChar, instuktoer.fornavn)
    .input('efternavn', sql.NVarChar, instuktoer.efternavn)
    .query("Update Instuktoer Set fornavn = @fornavn, efternavn = @efternavn Where PK_instruktoerId = @PK_instruktoerId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getKreditKort() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from KreditKort");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getKreditKortnr(kortNr) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter1', sql.BigInt, kortNr)
    .query("Select * From KreditKort where PK_kortNr = @input_parameter1");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getKreditKortcvc(kortNr, cvc) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter1', sql.BigInt, kortNr)
    .input('input_parameter2', sql.Int, cvc)
    .query("Select * From KreditKort where PK_kortNr = @input_parameter1 and cvc = @input_parameter2");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addKreditKort(kreditKort) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_kortNr', sql.BigInt, kreditKort.kortNr)
    .input('cvc', sql.Int, kreditKort.cvc)
    .input('kortholder', sql.NVarChar, kreditKort.kortholder)
    .input('udloebsDato', sql.Date, kreditKort.udloebsDato)
    .input('saldo', sql.Decimal, kreditKort.saldo)
    .query("Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato, saldo) Values (@PK_kortNr, @cvc, @kortholder, @udloebsDato, @saldo)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getKurv(brugernavn) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.NVarChar, brugernavn)
    .query("Select * From Kurv where FK_brugernavn = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addKurv(kurv) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_brugernavn', sql.NVarChar, kurv.FK_brugernavn)
    .input('totalPris', sql.Decimal, kreditKort.totalPris)
    .query("Insert Into Kurv (FK_brugernavn, totalPris) Values (@FK_brugernavn, @totalPris)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateKurv(kurv) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_brugernavn', sql.NVarChar, kurv.FK_brugernavn)
    .input('totalPris', sql.Decimal, kreditKort.totalPris)
    .query("Update Kurv Set totalPris = @totalPris Where FK_brugernavn = @FK_brugernavn");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function getLaaneBillede(id){
  try {
    let pool = await sql.connect(config);
    let product = await pool.request()
    .input('input_parameter'. sql.Int, id)
    .query("Select * From LaaneBilledere where FK_filmId = @input_parameter");
  }
  catch (error){
    console.log(error);
  }
}

async  function  addLaaneBillede(laaneBillede) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_filmId', sql.Int, laanebillede.FK_filmId)
    .input('link', sql.NVarChar, laanebillede.link)
    .input('beskrivelse', sql.NVarChar, laanebillede.beskrivelse)
    .query("Insert Into LaaneBilledere (FK_filmId, link, beskrivelse) Values (@FK_filmId, @link, @beskrivelse)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLaaneFilm() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from LaaneFilm");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLaaneFilmen(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneFilm where PK_filmId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLaaneFilmG(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * \
    from LaaneFilm as lf \
    Inner Join LaaneFilmGenre as lfg \
    on lf.PK_filmId = lfg.FK_filmId \
    Inner Join Genre as g \
    on lfg.FK_genreId = g.PK_genreId \
    where g.PK_genreId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLaaneFilm(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('filmNavn', sql.NVarChar, laaneFilm.filmNavn)
    .input('pris', sql.Decimal, laaneFilm.pris)
    .input('rabat', sql.Decimal, laaneFilm.rabat)
    .input('meangde', sql.Int, laaneFilm.meangde)
    .input('udlaant', sql.Int, laaneFilm.udlaant)
    .input('resevert', sql.Int, laaneFilm.resevert)
    .input('forventetDato', sql.Date, laaneFilm.forventetDato)
    .query("Insert Into LaaneFilm (filmNavn, pris, rabat, meangde, udlaant, resevert, forventetDato) \
    Values (@filmNavn, @pris, @rabat, @meangde, @udlaant, @resevert, @forventetDato)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmPris(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('pris', sql.Decimal, laaneFilm.pris)
    .query("Update LaaneFilm Set pris = @pris Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmRabat(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('rabat', sql.Decimal, laaneFilm.rabat)
    .query("Update LaaneFilm Set rabat = @rabat Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmMeangde(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('meangde', sql.Int, laaneFilm.meangde)
    .query("Update LaaneFilm Set meangde = @meangde Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmUdlaant(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('udlaant', sql.Int, laaneFilm.udlaant)
    .query("Update LaaneFilm Set udlaant = @udlaant Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmResevert(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('resevert', sql.Int, laaneFilm.resevert)
    .query("Update LaaneFilm Set resevert = @resevert Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmForventet(laaneFilm) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('rabat', sql.Date, laaneFilm.rabat)
    .query("Update LaaneFilm Set udlaant = @udlaant Where PK_filmId = @PK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLaaneFilmGenre(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneFilmGenre where FK_filmId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLaaneFilmGenreG(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneFilmGenre where FK_genreId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLaaneFilmGenre(laaneFilmGenre) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_filmId', sql.Int, laaneKurv.FK_filmId)
    .input('FK_genreId', sql.Int, laaneFilmGenre.FK_genreId)
    .query("Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) \
    Values (@FK_filmId, @FK_genreId)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLaaneFilmInstruktoer(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneFilmInstruktoer where FK_filmId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getLaaneFilmInstruktoerI(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneFilmInstruktoer where FK_instruktoerId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLaaneFilmInstruktoer(laaneFilmInstruktoer) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_filmId', sql.Int, laaneKurv.FK_filmId)
    .input('FK_InstruktoerId', sql.Int, laaneFilmGenre.FK_InstruktoerId)
    .query("Insert Into LaaneFilmInstruktoer (FK_filmId, FK_InstruktoerId) \
    Values (@FK_filmId, @FK_InstruktoerId)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLaaneKurv(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneKurv where PK_kurvId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLaaneFilmKurv(laaneKurv) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_kurvId', sql.Int, laaneKurv.FK_kurvId)
    .input('FK_filmId', sql.Int, laaneKurv.FK_filmId)
    .input('pris', sql.Decimal, laaneKurv.pris)
    .input('rabat', sql.Decimal, laaneKurv.rabat)
    .query("Insert Into Kurv (FK_kurvId, FK_filmId, pris, rabat) \
    Values (@FK_kurvId, @FK_filmId, @pris, @rabat)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneFilmKurv(laaneKurv) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_filmId', sql.Int, laaneFilm.PK_filmId)
    .input('pris', sql.Decimal, laaneFilm.pris)
    .query("Update Kurv Set pris = @pris, rabat = @rabat Where FK_filmId = @FK_filmId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getLaaneOrdreDetaljer(id) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, id)
    .query("SELECT * from LaaneOrdreDetaljer where PK_ordreId = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addLaaneOrdreDetaljer(laaneOrdreDetaljer) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('FK_ordreId', sql.Int, laaneOrdreDetaljer.FK_kurvId)
    .input('FK_filmId', sql.Int, laaneOrdreDetaljer.FK_filmId)
    .input('pris', sql.Decimal, laaneOrdreDetaljer.pris)
    .input('rabat', sql.Decimal, laaneOrdreDetaljer.rabat)
    .input('udlaansDato', sq.DateTime, laaneOrdreDetaljer.udlaabsDato)
    .input('returDato', sql.DateTime, laaneOrdreDetaljer.returDato)
    .input('FK_statusId', sql.Int, laaneOrdreDetaljer.FK_statusId)
    .query("Insert Into LaaneOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, udlaansDato, returDato, FK_statusId) \
    Values (@FK_ordreId, @FK_filmId, @pris, @rabat, @udlaansDato, @returDato, @FK_statusId)");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  updateLaaneOrdreDetaljer(laaneOrdreDetaljer) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('PK_ordreId', sql.Int, laaneOrdreDetaljer.PK_ordreId)
    .input('FK_statusId', sql.Int, laaneOrdreDetaljer.FK_statusId)
    .query("Update LaaneOrdreDetaljer Set FK_statusId = @FK_statusId Where FK_ordreId = @FK_ordreId");
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async  function  getOrdrer() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from Ordre");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  getOrdre(brugernavn) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.NVarChar, brugernavn)
      .query("SELECT * from Ordre where FK_brugernavn = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  getOrdreId(id) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, id)
      .query("Select * From Ordre where PK_ordreId = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  addOrdre(ordre) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('totalPris', sql.Decimal, ordre.totalPris)
      .input('FK_statusId', sql.Int, ordre.FK_statusId)
      .input('FK_addresseId', sql.Int, ordre.FK_addresseId)
      .input('FK_brugernavn', sql.NVarChar, ordre.FK_brugernavn)
      .query("Insert Into Ordre (totalPris, FK_statusId, FK_addresseId, FK_brugernavn) \
      Values (@totalPris, @FK_statusId, @FK_addresseId, @FK_brugernavn)");
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  async  function  updateOrdre(ordre) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('datoSendt', sql.DateTime, ordre.datoSendt)
      .input('FK_statusId', sql.Int, ordre.FK_statusId)
      .input('PK_ordreId', sql.NVarChar, ordre.PK_ordreId)
      .query("Update Ordre Set datoSendt = @datoSendt, FK_statusId = @FK_statusId Where PK_ordreId = @PK_ordreId");
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  async  function  updateOrdreStatus(ordre) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('datoSendt', sql.DateTime, ordre.datoSendt)
      .input('FK_statusId', sql.Int, ordre.FK_statusId)
      .input('PK_ordreId', sql.NVarChar, ordre.PK_ordreId)
      .query("Update Ordre Set FK_statusId = @FK_statusId Where PK_ordreId = @PK_ordreId");
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  async function getSalgsBillede(id){
    try {
      let pool = await sql.connect(config);
      let product = await pool.request()
      .input('input_parameter'. sql.Int, id)
      .query("Select * From SalgsBilleder where FK_filmId = @input_parameter");
    }
    catch (error){
      console.log(error);
    }
  }

  async  function  addSalgsBillede(salgsBillede) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('FK_filmId', sql.Int, laanebillede.FK_filmId)
      .input('link', sql.NVarChar, laanebillede.link)
      .input('beskrivelse', sql.NVarChar, laanebillede.beskrivelse)
      .query("Insert Into Kurv (FK_filmId, link, beskrivelse) Values (@FK_filmId, @link, @beskrivelse)");
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  async  function  getSalgsFilm() {
    try {
      let  pool = await  sql.connect(config);
      let  products = await  pool.request().query("SELECT * from salgsFilm");
      return  products.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }
    
  async  function  getSalgsFilmen(id) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, id)
      .query("SELECT * from SalgsFilm where PK_filmId = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  async  function  addSalgsFilm(salgsFilm) {
    try {
      let  pool = await  sql.connect(config);
      let  insertProduct = await  pool.request()
      .input('filmNavn', sql.NVarChar, salgsFilm.filmNavn)
      .input('pris', sql.Decimal, salgsFilm.pris)
      .input('rabat', sql.Decimal, salgsFilm.rabat)
      .input('stand', sql.Int, salgsFilm.stand)
      .query("Insert Into SalgsFilm (filmNavn, pris, rabat, stand) \
      Values (@filmNavn, @pris, @rabat, stand)");
      return  insertProduct.recordsets;
    }
    catch (err) {
      console.log(err);
    }
  }

  async  function  getSalgsKurv(id) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.Int, id)
      .query("SELECT * from SalgsKurv where PK_kurvId = @input_parameter");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

  module.exports = {
    getAddresse: getAddresse,
    getAddresseId: getAddresseId,
    getAddressePostNr: getAddressePostNr,
    getBrugere: getBrugere,
    getBruger: getBruger,    
    getByer:  getByer,
    getBy: getBy,
    addBy:  addBy,
    getKreditKort: getKreditKort,
    getKreditKortnr: getKreditKortnr,
    getKreditKortcvc: getKreditKortcvc,
    getKurv: getKurv,
    getLaaneBillede: getLaaneBillede,
    getLaaneFilm: getLaaneFilm,
    getLaaneFilmen: getLaaneFilmen,
    getLaaneFilmG: getLaaneFilmG,
    getLaaneKurv: getLaaneKurv,
    getOrdrer:  getOrdrer,
    getOrdre:  getOrdre,
    getOrdreId: getOrdreId,
    addOrdre: addOrdre,
    updateOrdre: updateOrdre,
    getByer:  getByer,
    getBy: getBy,
    addBy:  addBy,
    getSalgsBillede: getSalgsBillede,
    getSalgsFilm: getSalgsFilm,
    getSalgsFilmen: getSalgsFilmen,
    getSalgsKurv: getSalgsKurv,
  }