const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const addresseRoute = require("./api/routes/addresse");
const brugerRoute = require("./api/routes/bruger");
const brugerTypeRoute = require("./api/routes/brugerType");
const byRoute = require("./api/routes/by");
const genreRoute = require("./api/routes/genre");
const instruktoerRoute = require("./api/routes/instruktoer");
const kreditKortRoute = require("./api/routes/kreditKort");
const kurvRoute = require("./api/routes/kurv");
const laaneBillederRoute = require("./api/routes/laaneBilleder");
const laaneFilmRoute = require("./api/routes/laaneFilm");
const laaneFilmGenreRoute = require("./api/routes/laaneFilmGenre");
const laaneFilmInstruktoerRoute = require("./api/routes/laaneFilmInstruktoer");
const laaneKurvRoute = require("./api/routes/laaneKurv");
const laaneOrdreDetaljerRoute = require("./api/routes/laaneOrdreDetaljer");
const ordreRoute = require("./api/routes/ordre");
const salgsBillederRoute = require("./api/routes/salgsBilleder");
const salgsFilmRoute = require("./api/routes/salgsFilm");
const salgsFilmGenreRoute = require("./api/routes/salgsFilmGenre");
const salgsFilmInstruktoerRoute = require("./api/routes/salgsFilmInstruktoer");
const salgsKurvRoute = require("./api/routes/salgsKurv");
const salgsOrdreDetaljerRoute = require("./api/routes/salgsOrdreDetaljer");
const statusRoute = require("./api/routes/status");

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((request, response, next) => {
  console.log(request.method, request.url);
  next();
});

app.use("/addresse", addresseRoute);
app.use("/bruger", brugerRoute);
app.use("/brugerType", brugerTypeRoute);
app.use("/by", byRoute);
app.use("/genre", genreRoute);
app.use("/instruktoer", instruktoerRoute);
app.use("/kreditKort", kreditKortRoute);
app.use("/kurv", kurvRoute);
app.use("/laaneBilleder", laaneBillederRoute);
app.use("/laaneFilm", laaneFilmRoute);
app.use("/laaneFilmGenre", laaneFilmGenreRoute);
app.use("/laaneFilmInstruktoer", laaneFilmInstruktoerRoute);
app.use("/laaneOrdreDetaljer", laaneKurvRoute);
app.use("/laaneOrdreDetaljer", laaneOrdreDetaljerRoute);
app.use("/ordre", ordreRoute);
app.use("/salgsBilleder", salgsBillederRoute);
app.use("/salgsFilm", salgsFilmRoute);
app.use("/salgsFilmGenre", salgsFilmGenreRoute);
app.use("/salgsFilmInstruktoer", salgsFilmInstruktoerRoute);
app.use("/salgsKurv", salgsKurvRoute);
app.use("/salgsOrdreDetaljer", salgsOrdreDetaljerRoute);
app.use("/status", statusRoute);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);