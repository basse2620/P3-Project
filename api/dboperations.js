var config = require('./dbconfig');
const sql = require('mssql');
const { password } = require('./dbconfig');

// Addresse Funktioner

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
      .input('addresseId', sql.Int, PaddresseId) // Input fra brugeren
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

// Bruger Funktioner

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

// Bruger Type Funktioner

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

// By Funktioner

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

// Genre Funktioner

// Henter alle Genre
async function getGenre() {
  try {
    let pool = await sql.connect(config);
    let genre = await pool.request().query("SELECT * from Genre");
    return genre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en specifik genre på dets id
async function getGenren(genreId) {
  try {
    let pool = await sql.connect(config);
    let genre = await pool.request()
      .input('genreId', sql.Int, genreId)
      .query("SELECT * from Genre where PK_genreId = @genreId");
    return genre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en alle instruktoer der har forbinelser til en film
async function getGenreFilm(filmId) {
  try {
    let pool = await sql.connect(config);
    let genre = await pool.request()
      .input('filmId', sql.Int, filmId)
      .query("SELECT * from Genre As g \
      Inner Join LaaneFilmGenre As lfg \
      on g.PK_genreId = lfg.FK_genreId \
      Inner Join LaaneFilm As lf \
      on lfg.FK_filmId = PK_filmId \
      where lf.PK_film = @filmId");
    return genre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// instruktoer Funktioner

// Henter alle instruktoere
async function getInstruktoer() {
  try {
    let pool = await sql.connect(config);
    let instruktoer = await pool.request().query("SELECT * from instruktoer");
    return instruktoer.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en specifik instruktoer på instruktoerens id
async function getInstruktoerId(instruktoerId) {
  try {
    let pool = await sql.connect(config);
    let instruktoer = await pool.request()
      .input('instruktoerId', sql.Int, instruktoerId)
      .query("SELECT * from Instruktoer where PK_instruktoerId = @instruktoerId");
    return instruktoer.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en alle instruktoer der har forbinelser til en film
async function getInstruktoerFilm(filmId) {
  try {
    let pool = await sql.connect(config);
    let instruktoer = await pool.request()
      .input('filmId', sql.Int, id)
      .query("SELECT * from Instruktoer As i \
      Inner Join LaaneFilmInstruktoer As lfi \
      on i.PK_instruktoerId = lfi.FK_instruktoerId \
      Inner Join LaaneFilm As lf \
      on lfi.FK_filmId = PK_filmId \
      where lf.PK_film = @filmId");
    return instruktoer.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en Instruktoer
async function addInstruktoer(instruktoer) {
  try {
    let pool = await sql.connect(config);
    let insertInstruktoer = await pool.request()
      .input('fornavn', sql.NVarChar, instruktoer.fornavn)
      .input('efternavn', sql.NVarChar, instruktoer.efternavn)
      .query("Insert Into Instruktoer (fornavn, efternavn) Values (@fornavn, @efternavn)");
    return insertInstruktoer.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Upadatere en instruktoer på instruktoerens id
async function updateInstruktoer(instruktoer) {
  try {
    let pool = await sql.connect(config);
    let updateInstruktoer = await pool.request()
      .input('instruktoerId', sql.Int, instruktoer.instruktoerId)
      .input('fornavn', sql.NVarChar, instruktoer.fornavn)
      .input('efternavn', sql.NVarChar, instruktoer.efternavn)
      .query("Update Instruktoer Set fornavn = @fornavn, efternavn = @efternavn Where PK_instruktoerId = @instruktoerId");
    return updateInstruktoer.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Kredit Kort Funktioner

// Henter saldo på et Kredit Kort på det kort nr og cvc
async function getKreditKort(kortNr, cvc) {
  try {
    let pool = await sql.connect(config);
    let kort = await pool.request()
      .input('kortNr', sql.BigInt, kortNr)
      .input('cvc', sql.Int, cvc)
      .query("Select saldo From KreditKort where PK_kortNr = @kortNr and cvc = @cvc");
    return product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer et kredit kort
async function addKreditKort(kreditKort) {
  try {
    let pool = await sql.connect(config);
    let insertKort = await pool.request()
      .input('kortNr', sql.BigInt, kreditKort.kortNr)
      .input('cvc', sql.Int, kreditKort.cvc)
      .input('kortholder', sql.NVarChar, kreditKort.kortholder)
      .input('udloebsDato', sql.Date, kreditKort.udloebsDato)
      .input('saldo', sql.Decimal, kreditKort.saldo)
      .query("Insert Into KreditKort (PK_kortNr, cvc, kortholder, udloebsDato, saldo) Values (@kortNr, @cvc, @kortholder, @udloebsDato, @saldo)");
    return insertKort.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere saldoen på et kredit kort vis kort nr og cvc er tastet ind
async function updateKreditKortSaldo(kreditKort) {
  try {
    let pool = await sql.connect(config);
    let updateKort = await pool.request()
      .input('kortNr', sql.BigInt, kreditKort.kortNr)
      .input('cvc', sql.Int, kreditKort.cvc)
      .input('saldo', sql.Decimal, kreditKort.saldo)
      .query("Update KreditKort Set saldo = @saldo Where PK_kortNr = @kortNr And cvc = @cvc");
    return updateKort.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteKreditKort(kreditKort) {
  try {
    let pool = await sql.connect(config);
    let deleteKort = await pool.request()
      .input('kortNr', sql.BigInt, kreditKort.kortNr)
      .input('cvc', sql.Int, kreditKort.cvc)
      .input('kortholder', sql.NVarChar, kreditKort.kortholder)
      .query("Delete From KreditKort where PK_kortNr = @kortNr And cvc = @cvc And kortholder = @kortholder");
    return deleteKort.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Kurv Funktioner

// Henter alt data fra en kurv der tilhøre en bruger
async function getKurv(brugernavn) {
  try {
    let pool = await sql.connect(config);
    let kurv = await pool.request()
      .input('brugernavn', sql.NVarChar, brugernavn)
      .query("Select * From Kurv where FK_brugernavn = @brugernavn");
    return kurv.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en kurv
async function addKurv(kurv) {
  try {
    let pool = await sql.connect(config);
    let insertKurv = await pool.request()
      .input('brugernavn', sql.NVarChar, kurv.brugernavn)
      .input('totalPris', sql.Decimal, kreditKort.totalPris)
      .query("Insert Into Kurv (FK_brugernavn, totalPris) Values (@brugernavn, @totalPris)");
    return insertKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en kurv på brugers brugernavn
async function updateKurv(kurv) {
  try {
    let pool = await sql.connect(config);
    let updateKurv = await pool.request()
      .input('brugernavn', sql.NVarChar, kurv.brugernavn)
      .input('totalPris', sql.Decimal, kreditKort.totalPris)
      .query("Update Kurv Set totalPris = @totalPris Where FK_brugernavn = @brugernavn");
    return updateKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Laane Billedere Funktioner

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

// Laane Film Funktioner

// Henter alle laane film
async function getLaaneFilm() {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request().query("SELECT * from LaaneFilm");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter 1 specifik laane film på filmen id
async function getLaaneFilmen(filmId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('filmId', sql.Int, filmId)
      .query("SELECT * from LaaneFilm where PK_filmId = @filmId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle laane film med en specifik genre på genrens id
async function getLaaneFilmG(genreId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('genreId', sql.Int, genreId)
      .query("SELECT * from LaaneFilm as lf \
      Inner Join LaaneFilmGenre as lfg \
      on lf.PK_filmId = lfg.FK_filmId \
      Inner Join Genre as g \
      on lfg.FK_genreId = g.PK_genreId \
      where g.PK_genreId = @genreId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle laane film med en specifik instruktoer på instruktoerens id
async function getLaaneFilmI(instruktoerId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('instruktoerId', sql.Int, instruktoerId)
      .query("SELECT * from LaaneFilm as lf \
      Inner Join LaaneFilmInstruktoer as lfi \
      on lf.PK_filmId = lfg.FK_filmId \
      Inner Join Instruktoer as i \
      on lfi.FK_instruktoerId = i.PK_instruktoerId \
      where g.PK_instruktoerId = @instruktoerId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en laane film
async function addLaaneFilm(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let insertFilm = await pool.request()
      .input('filmNavn', sql.NVarChar, laaneFilm.filmNavn)
      .input('pris', sql.Decimal, laaneFilm.pris)
      .input('rabat', sql.Decimal, laaneFilm.rabat)
      .input('meangde', sql.Int, laaneFilm.meangde)
      .input('udlaant', sql.Int, laaneFilm.udlaant)
      .input('resevert', sql.Int, laaneFilm.resevert)
      .input('forventetDato', sql.Date, laaneFilm.forventetDato)
      .query("Insert Into LaaneFilm (filmNavn, pris, rabat, meangde, udlaant, resevert, forventetDato) \
      Values (@filmNavn, @pris, @rabat, @meangde, @udlaant, @resevert, @forventetDato)");
    return insertFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere prisen på en laane film
async function updateLaaneFilmPris(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('pris', sql.Decimal, laaneFilm.pris)
      .query("Update LaaneFilm Set pris = @pris Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere rabaten på en laane film
async function updateLaaneFilmRabat(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('rabat', sql.Decimal, laaneFilm.rabat)
      .query("Update LaaneFilm Set rabat = @rabat Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere rabaten på alle laane film
async function updateLaaneFilmRabatA(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('rabat', sql.Decimal, laaneFilm.rabat)
      .query("Update LaaneFilm Set rabat = @rabat");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere meangden af laane film
async function updateLaaneFilmMeangde(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('meangde', sql.Int, laaneFilm.meangde)
      .query("Update LaaneFilm Set meangde = @meangde Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere hvor mange laane film er udlaant
async function updateLaaneFilmUdlaant(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('udlaant', sql.Int, laaneFilm.udlaant)
      .query("Update LaaneFilm Set udlaant = @udlaant Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere hvor mange laane film der er resevert
async function updateLaaneFilmResevert(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('resevert', sql.Int, laaneFilm.resevert)
      .query("Update LaaneFilm Set resevert = @resevert Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// updatere den forventede dato man kan laane en film igen
async function updateLaaneFilmForventet(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('forventet', sql.Date, laaneFilm.rabat)
      .query("Update LaaneFilm Set udlaant = @udlaant Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteLaaneFilm(laaneFilm) {
  try {
    let pool = await sql.connect(config);
    let deleteFilm = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .query("Delete From LaaneFilm where PK_filmId = @filmId");
    return deleteFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// laane Film Genre Funktioner

// Tilføjer mellem table data for en laane films genre
async function addLaaneFilmGenre(laaneFilmGenre) {
  try {
    let pool = await sql.connect(config);
    let insertFilmGenre = await pool.request()
      .input('filmId', sql.Int, laaneKurv.filmId)
      .input('genreId', sql.Int, laaneFilmGenre.genreId)
      .query("Insert Into LaaneFilmGenre (FK_filmId, FK_genreId) \
      Values (@filmId, @genreId)");
    return insertFilmGenre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Laane Film Instruktoer Funktioner

// Tilføjer mellem table data for en laane films instruktoer
async function addLaaneFilmInstruktoer(laaneFilmInstruktoer) {
  try {
    let pool = await sql.connect(config);
    let insertFilmInstruktoer = await pool.request()
      .input('filmId', sql.Int, laaneFilmInstruktoer.filmId)
      .input('instruktoerId', sql.Int, laaneFilmInstruktoer.instruktoerId)
      .query("Insert Into LaaneFilmInstruktoer (FK_filmId, FK_instruktoerId) \
      Values (@filmId, @instruktoerId)");
    return insertFilmInstruktoer.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Laane Kurv Funktioner

// Henter laane delen af kurven
async function getLaaneKurv(kurvId) {
  try {
    let pool = await sql.connect(config);
    let laaneKurv = await pool.request()
      .input('kurvId', sql.NVarChar, kurvId)
      .query("SELECT * from LaaneKurv where FK_kurvId = @kurvId");
    return laaneKurv.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer laane kurv 
async function addLaaneKurv(laaneKurv) {
  try {
    let pool = await sql.connect(config);
    let insertLaaneKurv = await pool.request()
      .input('kurvId', sql.Int, laaneKurv.kurvId)
      .input('filmId', sql.Int, laaneKurv.filmId)
      .input('pris', sql.Decimal, laaneKurv.pris)
      .input('rabat', sql.Decimal, laaneKurv.rabat)
      .query("Insert Into LaaneKurv (FK_kurvId, FK_filmId, pris, rabat) \
      Values (@kurvId, @filmId, @pris, @rabat)");
    return insertLaaneKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere laane kurven
async function updateLaaneKurv(laaneKurv) {
  try {
    let pool = await sql.connect(config);
    let updateLaaneKurv = await pool.request()
      .input('filmId', sql.Int, laaneFilm.filmId)
      .input('pris', sql.Decimal, laaneFilm.pris)
      .input('rabat', sql.Decimal, laaneKurv.rabat)
      .query("Update LaaneKurv Set pris = @pris, rabat = @rabat Where FK_kurvId = @kurvId");
    return updateLaaneKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteLaaneKurv(laaneKurv) {
  try {
    let pool = await sql.connect(config);
    let deleteLaaneKurv = await pool.request()
      .input('kurvId', sql.Int, laaneKurv.kurvId)
      .input('filmId', sql.Int, laaneKurv.filmId)
      .query("Delete From LaaneKurv where FK_kurvId = @kurvId");
    return deleteLaaneKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Laane Ordre Detaljer Funktioner

// Henter laane ordre detaljer fra ordre id
async function getLaaneOrdreDetaljer(ordreId) {
  try {
    let pool = await sql.connect(config);
    let laaneOrdre = await pool.request()
      .input('ordreId', sql.Int, id)
      .query("SELECT * from LaaneOrdreDetaljer where FK_ordreId = @ordreId");
    return laaneOrdre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Gemmer laane ordre detaljer
async function addLaaneOrdreDetaljer(laaneOrdreDetaljer) {
  try {
    let pool = await sql.connect(config);
    let insertLaaneOrdre = await pool.request()
      .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
      .input('filmId', sql.Int, laaneOrdreDetaljer.filmId)
      .input('pris', sql.Decimal, laaneOrdreDetaljer.pris)
      .input('rabat', sql.Decimal, laaneOrdreDetaljer.rabat)
      .input('udlaansDato', sq.DateTime, laaneOrdreDetaljer.udlaabsDato)
      .input('returDato', sql.DateTime, laaneOrdreDetaljer.returDato)
      .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
      .query("Insert Into LaaneOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, udlaansDato, returDato, FK_statusId) \
      Values (@ordreId, @filmId, @pris, @rabat, @udlaansDato, @returDato, @statusId)");
    return insertLaaneOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere laane ordre detaljer
async function updateLaaneOrdreDetaljer(laaneOrdreDetaljer) {
  try {
    let pool = await sql.connect(config);
    let updateLaaneOrdre = await pool.request()
      .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
      .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
      .query("Update LaaneOrdreDetaljer Set FK_statusId = @statusId Where FK_ordreId = @ordreId");
    return updateLaaneOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Ordre Funktioner

// Henter alle ordre
async function getOrdrer() {
  try {
    let pool = await sql.connect(config);
    let ordre = await pool.request().query("SELECT * from Ordre");
    return ordre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle ordre for en bruger
async function getOrdre(brugernavn) {
  try {
    let pool = await sql.connect(config);
    let ordre = await pool.request()
      .input('brugernavn', sql.NVarChar, brugernavn)
      .query("SELECT * from Ordre where FK_brugernavn = @brugernavn");
    return ordre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alt fra en ordre
async function getOrdreId(ordreId) {
  try {
    let pool = await sql.connect(config);
    let ordre = await pool.request()
      .input('ordreId', sql.Int, ordreId)
      .query("Select * From Ordre where PK_ordreId = @ordreId");
    return ordre.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Gemmer en ordre
async function addOrdre(ordre) {
  try {
    let pool = await sql.connect(config);
    let insertOrdre = await pool.request()
      .input('totalPris', sql.Decimal, ordre.totalPris)
      .input('statusId', sql.Int, ordre.statusId)
      .input('addresseId', sql.Int, ordre.addresseId)
      .input('brugernavn', sql.NVarChar, ordre.brugernavn)
      .query("Insert Into Ordre (totalPris, FK_statusId, FK_addresseId, FK_brugernavn) \
      Values (@totalPris, @statusId, @addresseId, @brugernavn)");
    return insertOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en ordres dato sendt og status
async function updateOrdre(ordre) {
  try {
    let pool = await sql.connect(config);
    let updateOrdre = await pool.request()
      .input('datoSendt', sql.DateTime, ordre.datoSendt)
      .input('statusId', sql.Int, ordre.statusId)
      .input('ordreId', sql.Int, ordre.ordreId)
      .query("Update Ordre Set datoSendt = @datoSendt, FK_statusId = @statusId Where PK_ordreId = @ordreId");
    return updateOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en ordres status
async function updateOrdreStatus(ordre) {
  try {
    let pool = await sql.connect(config);
    let updateOrdre = await pool.request()
      .input('statusId', sql.Int, ordre.statusId)
      .input('ordreId', sql.Int, ordre.ordreId)
      .query("Update Ordre Set FK_statusId = @statusId Where PK_ordreId = @ordreId");
    return updateOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en ordres total pris
async function updateOrdre(ordre) {
  try {
    let pool = await sql.connect(config);
    let updateOrdre = await pool.request()
      .input('totalPris', sql.Decimal, ordre.totalPris)
      .input('ordreId', sql.Int, ordre.ordreId)
      .query("Update Ordre Set totalPris = @totalPris Where PK_ordreId = @ordreId");
    return updateOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Salgs Billedere Funktioner

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

// Salgs Film Funktioner

// Henter alle salgs film
async function getSalgsFilm() {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request().query("SELECT * from salgsFilm");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter en specifik sagls film på dets id
async function getSalgsFilmen(filmId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('filmId', sql.Int, filmId)
      .query("SELECT * from SalgsFilm where PK_filmId = @filmId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle salgs film med en specifik genre på genrens id
async function getSalgsFilmG(genreId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('genreId', sql.Int, genreId)
      .query("SELECT * from SalgsFilm as sf \
      Inner Join SalgsFilmGenre as sfg \
      on sf.PK_filmId = sfg.FK_filmId \
      Inner Join Genre as g \
      on sfg.FK_genreId = g.PK_genreId \
      where g.PK_genreId = @genreId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Henter alle salgs film med en specifik instruktoer på instruktoerens id
async function getSalgsFilmI(instruktoerId) {
  try {
    let pool = await sql.connect(config);
    let film = await pool.request()
      .input('instruktoerId', sql.Int, instruktoerId)
      .query("SELECT * from SalgsFilm as sf \
      Inner Join SalgsFilmInstruktoer as sfi \
      on sf.PK_filmId = sfg.FK_filmId \
      Inner Join Instruktoer as i \
      on sfi.FK_instruktoerId = i.PK_instruktoerId \
      where i.PK_instruktoerId = @instruktoerId");
    return film.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Tilføjer en salgs film
async function addSalgsFilm(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let insertFilm = await pool.request()
      .input('filmNavn', sql.NVarChar, salgsFilm.filmNavn)
      .input('pris', sql.Decimal, salgsFilm.pris)
      .input('rabat', sql.Decimal, salgsFilm.rabat)
      .input('stand', sql.Int, salgsFilm.stand)
      .query("Insert Into SalgsFilm (filmNavn, pris, rabat, stand) \
      Values (@filmNavn, @pris, @rabat, stand)");
    return insertFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en salgs films pris
async function updateSalgsFilmPris(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, salgsFilm.filmId)
      .input('pris', sql.Decimal, salgsFilm.pris)
      .query("Update SalgsFilm Set pris = @pris Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en salgs films rabat
async function updateSalgsFilmRabat(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, salgsFilm.filmId)
      .input('rabat', sql.Decimal, salgsFilm.rabat)
      .query("Update SalgsFilm Set rabat = @rabat Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere alle salgs films rabat
async function updateSalgsFilmRabatA(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, salgsFilm.filmId)
      .input('rabat', sql.Decimal, salgsFilm.rabat)
      .query("Update SalgsFilm Set rabat = @rabat");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere en salgs films stand
async function updateSalgsFilmStand(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let updateFilm = await pool.request()
      .input('filmId', sql.Int, salgsFilm.filmId)
      .input('stand', sql.Int, salgsFilm.stand)
      .query("Update SalgsFilm Set stand = @stand Where PK_filmId = @filmId");
    return updateFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteSalgsFilm(salgsFilm) {
  try {
    let pool = await sql.connect(config);
    let deleteSalgsFilm = await pool.request()
      .input('filmId', sql.Int, salgsKurv.filmId)
      .query("Delete From SalgsFilm where FK_filmId = @filmId");
    return deleteSalgsFilm.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Salgs Film Genre Funktioner

// Gemmer salgs film genre mellem table data
async function addSalgsFilmGenre(salgsFilmGenre) {
  try {
    let pool = await sql.connect(config);
    let insertFilmGenre = await pool.request()
      .input('filmId', sql.Int, salgsFilmGenre.filmId)
      .input('genreId', sql.Int, salgsFilmGenre.genreId)
      .query("Insert Into SalgsFilmGenre (FK_filmId, FK_genreId) \
    Values (@filmId, @genreId)");
    return insertFilmGenre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Salgs Film Instruktoer Funktioner

// Gemmer salgs film intruktoer mellem table data
async function addSalgsFilmInstruktoer(salgsFilmInstruktoer) {
  try {
    let pool = await sql.connect(config);
    let insertFilmInstruktoer = await pool.request()
      .input('filmId', sql.Int, salgsFilmInstruktoer.filmId)
      .input('instruktoerId', sql.Int, salgsFilmInstruktoer.instruktoerId)
      .query("Insert Into SalgsFilmInstruktoer (FK_filmId, FK_instruktoerId) \
      Values (@filmId, @instruktoerId)");
    return insertFilmInstruktoer.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Salgs Kurv Funktioner

// Henter en specifik saægs kurv på kurv id
async function getSalgsKurv(kurvId) {
  try {
    let pool = await sql.connect(config);
    let kurv = await pool.request()
      .input('kurvId', sql.Int, kurvId)
      .query("SELECT * from SalgsKurv where PK_kurvId = @kurvId");
    return kurv.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

// Gemmer salgs kurv
async function addSalgsKurv(salgsKurv) {
  try {
    let pool = await sql.connect(config);
    let insertKurv = await pool.request()
      .input('kurvId', sql.Int, salgsKurv.kurvId)
      .input('filmId', sql.Int, salgsKurv.filmId)
      .input('pris', sql.Int, salgsKurv.pris)
      .input('rabat', sql.Int, salgsKurv.rabat)
      .input('maengde', sql.Int, salgsKurv.meangde)
      .query("Insert Into SalgsFilmInstruktoer (FK_kurvId, FK_filmId, pris, rabat, meangde) \
      Values (@kurvId, @filmId, @pris, @rabat, @meangde)");
    return insertKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere salgs kurven
async function updateSalgsKurv(saglsKurv) {
  try {
    let pool = await sql.connect(config);
    let updateKurv = await pool.request()
      .input('filmId', sql.Int, saglsKurv.filmId)
      .input('pris', sql.Decimal, saglsKurv.pris)
      .input('rabat', sql.Decimal, saglsKurv.rabat)
      .input('meangde', sql.Int, saglsKurv.meangde)
      .query("Update SaglsKurv Set pris = @pris, rabat = @rabat, meangde = @meangde Where FK_kurvId = @kurvId");
    return updateKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

async function deleteSalgsKurv(saglsKurv) {
  try {
    let pool = await sql.connect(config);
    let deleteSalgsKurv = await pool.request()
      .input('kurvId', sql.Int, saglsKurv.kurvId)
      .query("Delete From SalgsKurv where FK_kurvId = @kurvId");
    return deleteSalgsKurv.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Salgs Ordre Detaljer Funktioner

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
      .input('meangde', sql.Int, salgsOrdreDetaljer.meangde)
      .query("Insert Into SalgsOrdreDetaljer  (FK_ordreId, FK_filmId, pris, rabat, meangde) \
      Values (@ordreId, @filmId, @pris, @rabat, @meangde)");
    return insertSaglsOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Updatere laane ordre detaljer
async function updateSalgsOrdreDetaljer(laaneOrdreDetaljer) {
  try {
    let pool = await sql.connect(config);
    let updateSaglsOrdre = await pool.request()
      .input('ordreId', sql.Int, laaneOrdreDetaljer.ordreId)
      .input('statusId', sql.Int, laaneOrdreDetaljer.statusId)
      .query("Update LaaneOrdreDetaljer Set FK_statusId = @statusId Where FK_ordreId = @ordreId");
    return updateSaglsOrdre.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

// Status Funktioner

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
  getAddresse: getAddresse,
  getAddresseId: getAddresseId,
  getAddressePostNr: getAddressePostNr,
  addAddresse: addAddresse,
  updateAddresse: updateAddresse,
  getBrugere: getBrugere,
  getBruger: getBruger,
  addBruger: addBruger,
  updateBruger: updateBruger,
  deleteBruger: deleteBruger,
  getBrugerType: getBrugerType,
  getByer: getByer,
  getBy: getBy,
  getGenre: getGenre,
  getGenren: getGenren,
  getGenreFilm: getGenreFilm,
  getInstruktoer: getInstruktoer,
  getInstruktoerId: getInstruktoerId,
  getInstruktoerFilm: getInstruktoerFilm,
  addInstruktoer: addInstruktoer,
  updateInstruktoer: updateInstruktoer,
  getKreditKort: getKreditKort,
  addKreditKort: addKreditKort,
  updateKreditKortSaldo: updateKreditKortSaldo,
  deleteKreditKort: deleteKreditKort,
  getKurv: getKurv,
  addKurv: addKurv,
  updateKurv: updateKurv,
  getLaaneBillede: getLaaneBillede,
  addLaaneBillede: addLaaneBillede,
  getLaaneFilm: getLaaneFilm,
  getLaaneFilmen: getLaaneFilmen,
  getLaaneFilmG: getLaaneFilmG,
  getLaaneFilmI: getLaaneFilmI,
  addLaaneFilm: addLaaneFilm,
  updateLaaneFilmPris: updateLaaneFilmPris,
  updateLaaneFilmRabat: updateLaaneFilmRabat,
  updateLaaneFilmRabatA: updateLaaneFilmRabatA,
  updateLaaneFilmMeangde: updateLaaneFilmMeangde,
  updateLaaneFilmUdlaant: updateLaaneFilmUdlaant,
  updateLaaneFilmResevert: updateLaaneFilmResevert,
  updateLaaneFilmForventet: updateLaaneFilmForventet,
  deleteLaaneFilm: deleteLaaneFilm,
  addLaaneFilmGenre: addLaaneFilmGenre,
  addLaaneFilmInstruktoer: addLaaneFilmInstruktoer,
  getLaaneKurv: getLaaneKurv,
  addLaaneKurv: addLaaneKurv,
  updateLaaneKurv: updateLaaneKurv,
  deleteLaaneKurv: deleteLaaneKurv,
  getLaaneOrdreDetaljer: getLaaneOrdreDetaljer,
  addLaaneOrdreDetaljer: addLaaneOrdreDetaljer,
  updateLaaneOrdreDetaljer: updateLaaneOrdreDetaljer,
  getOrdrer: getOrdrer,
  getOrdre: getOrdre,
  getOrdreId: getOrdreId,
  addOrdre: addOrdre,
  updateOrdre: updateOrdre,
  updateOrdreStatus: updateOrdreStatus,
  getSalgsBillede: getSalgsBillede,
  addSalgsBillede: addSalgsBillede,
  getSalgsFilm: getSalgsFilm,
  getSalgsFilmen: getSalgsFilmen,
  getSalgsFilmG: getSalgsFilmG,
  getSalgsFilmI: getSalgsFilmI,
  addSalgsFilm: addSalgsFilm,
  updateSalgsFilmPris: updateSalgsFilmPris,
  updateSalgsFilmRabat: updateSalgsFilmRabat,
  updateSalgsFilmRabatA: updateSalgsFilmRabatA,
  updateSalgsFilmStand: updateSalgsFilmStand,
  deleteSalgsFilm: deleteSalgsFilm,
  addSalgsFilmGenre: addSalgsFilmGenre,
  addSalgsFilmInstruktoer: addSalgsFilmInstruktoer,
  getSalgsKurv: getSalgsKurv,
  addSalgsKurv: addSalgsKurv,
  updateSalgsKurv: updateSalgsKurv,
  deleteSalgsKurv: deleteSalgsKurv,
  getSaglsOrdreDetaljer: getSaglsOrdreDetaljer,
  addSalgsOrdreDetaljer: addSalgsOrdreDetaljer,
  updateSalgsOrdreDetaljer: updateSalgsOrdreDetaljer,
  getStatus: getStatus
}