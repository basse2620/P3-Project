const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const cookieParser = require('cookie-parser');

const addresseRoute = require("./api/routes/addresse");
const brugerRoute = require("./api/routes/bruger");
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
app.use("/by", byRoute);
app.use("/genre", genreRoute);
app.use("/instruktoer", instruktoerRoute);
app.use("/kredit-kort", kreditKortRoute);
app.use("/kurv", kurvRoute);
app.use("/laane-billeder", laaneBillederRoute);
app.use("/laane-film", laaneFilmRoute);
app.use("/laane-film-genre", laaneFilmGenreRoute);
app.use("/laane-film-instruktoer", laaneFilmInstruktoerRoute);
app.use("/laane-ordre-detaljer", laaneKurvRoute);
app.use("/laane-ordre-detaljer", laaneOrdreDetaljerRoute);
app.use("/ordre", ordreRoute);
app.use("/salgs-billeder", salgsBillederRoute);
app.use("/salgs-film", salgsFilmRoute);
app.use("/salgs-film-genre", salgsFilmGenreRoute);
app.use("/salgs-film-instruktoer", salgsFilmInstruktoerRoute);
app.use("/salgs-kurv", salgsKurvRoute);
app.use("/salgs-ordre-detaljer", salgsOrdreDetaljerRoute);
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