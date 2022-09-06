var Db = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
var addresse = require('./Addresse')
var Bruger = require('./Bruger');
var BrugerType = require('./BrugerType')
var By = require('./By');
var Genre = require('./Genre')
var Instuktoer = require('./Instruktoer')
var Kreditkort = require('./KreditKort')
var Kurv = require('./Kurv');
var LaaneBilleder = require('./LaaneBilleder')
var LaaneFilm = require('./LaaneFilm')
var LaaneFilmGenre = require('./LaaneFilmGenre')
var LaaneFilmInstruktoer = require('./LaaneFilmInstruktoer')
var LaaneKurv = require('./LaaneKurv')
var laaneOrdreDetaljer = require('./laaneOrdreDetaljer')
var Order = require('./Ordre');
var SalgsBilleder = require('./SalgsBilleder')
var SalgsFilm = require('./SalgsFilm')
var SalgsFilmGenre = require('./SalgsFilmGenre')
var SalgsFilmInstruktoer = require('./SalgsFilmInstruktoer')
var SalgsKurv = require('./SalgsKurv')
var SalgsOrdreDetaljer = require('./salgsOrdreDetaljer')
var Status = require('./Status');
const { request, response } = require('express');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
  console.log('middleware');
  next();
});

// Addresse

router.route('/addresse').get((request, response) => {
  Db.getAddresse().then((data) => {
    response.json(data[0]);
  })
})

router.route('/addresse/:id').get((request, response) => {
  Db.getAddresseId(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/addresse-post-nr/:postNr').get((request, response) => {
  Db.getAddressePostNr(request.params.postNr).then((data) => {
    response.json(data[0]);
  })
})

router.route('/addresse').post((request, response) => {
  let addresse = { ...request.body }
  Db.addAddresse(addresse).then(data => {
    response.status(201).json(data);
  })
})

router.route('/addresse').patch((request, response) => {
  let addresse = { ...request.body }
  Db.updateAddresse(addresse).then(data => {
    response.status(201).json(data);
  })
})

// Bruger

router.route('/bruger').get((request, response) => {
  Db.getBrugere().then((data) => {
    response.json(data[0]);
  })
})

router.route('/bruger/:brugernavn/:password').get((request, response) => {
  Db.getBruger(request.params.brugernavn, request.params.password).then((data) => {
    response.json(data[0]);
  })
})

router.route('/bruger').post((request, response) => {
  let bruger = { ...request.body }
  Db.addBruger(bruger).then(data => {
    response.status(201).json(data);
  })
})

router.route('/bruger').patch((request, response) => {
  let bruger = { ...request.body }
  Db.updateBruger(bruger).then(data => {
    response.status(201).json(data);
  })
})

// By

router.route('/by').get((request, response) => {
  Db.getByer().then((data) => {
    response.json(data[0]);
  })
})

router.route('/by/:post-nr').get((request, response) => {
  Db.getBy(request.params.postNr).then((data) => {
    response.json(data[0]);
  })
})

// Genre

router.route('/genre').get((request, response) => {
  Db.getGenre().then((data) => {
    response.json(data[0]);
  })
})

router.route('/genre/:id').get((request, response) => {
  Db.getGenren().then((data) => {
    response.json(data[0]);
  })
})

router.route('/genre-film/:id').get((request, response) => {
  Db.getGenreFilm().then((data) => {
    response.json(data[0]);
  })
})

// Intruktoer

router.route('/instruktoer').get((request, response) => {
  Db.getInstruktoer().then((data) => {
    response.json(data[0]);
  })
})

router.route('/instruktoer/:id').get((request, response) => {
  Db.getInstruktoerId().then((data) => {
    response.json(data[0]);
  })
})

router.route('/instruktoer-film/:id').get((request, response) => {
  Db.getInstruktoerFilm().then((data) => {
    response.json(data[0]);
  })
})

router.route('/instruktoer').post((request, response) => {
  let instruktoer = { ...request.body }
  Db.addInstruktoer(instruktoer).then(data => {
    response.status(201).json(data);
  })
})

// Kredit Kort

router.route('/kredit-kort/:kortnr/:cvc').get((request, response) => {
  Db.getKreditKort(request.params.kortnr, request.params.cvc).then((data) => {
    response.json(data[0]);
  })
})

router.route('/kredit-kort').post((request, response) => {
  let kreditKort = { ...request.body }
  Db.addKreditKort(kreditKort).then(data => {
    response.status(201).json(data);
  })
})

router.route('/kredit-kort').patch((request, response) => {
  let kreditKort = { ...request.body }
  Db.updateKreditKortSaldo(kreditKort).then(data => {
    response.status(201).json(data);
  })
})

router.route('/kredit-kort').delete((request, response) => {
  let kreditKort = { ...request.body }
  Db.deleteKreditKort(kreditKort).then(data => {
    response.status(201).json(data);
  })
})

// Kurv

router.route('/kurv/:brugernavn').get((request, response) => {
  Db.getKurv(request.params.brugernavn).then((data) => {
    response.json(data[0]);
  })
})

router.route('/kurv').post((request, response) => {
  let kurv = { ...request.body }
  Db.addKurv(kurv).then(data => {
    response.status(201).json(data);
  })
})

router.route('/kurv').patch((request, response) => {
  let kurv = { ...request.body }
  Db.updateKurv(kurv).then(data => {
    response.status(201).json(data);
  })
})

// Laane Billeder

router.route('/laane-billede/:id').get((request, response) => {
  Db.getLaaneBillede(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-billede').post((request, response) => {
  let laaneBillede = { ...request.body }
  Db.addLaaneBillede(laaneBillede).then(data => {
    response.status(201).json(data);
  })
})

// Laane Film

router.route('/laane-film').get((request, response) => {
  Db.getLaaneFilm().then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-film/:id').get((request, response) => {
  Db.getLaaneFilmen(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-film-genre/:id').get((request, response) => {
  Db.getLaaneFilmG(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-film-instruktoer/:id').get((request, response) => {
  Db.getLaaneFilmI(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-film').post((request, response) => {
  let laaneFilm = { ...request.body }
  Db.addLaaneFilm(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-pris').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmPris(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-rabat').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmRabat(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-rabat-alle').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmRabatA(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-meangde').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmMeangde(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-udlaant').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmUdlaant(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-resevert').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmResevert(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-film-forventet').patch((request, response) => {
  let laaneFilm = { ...request.body }
  Db.updateLaaneFilmForventet(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

// Laane Film Genre

router.route('/laane-film-genre').post((request, response) => {
  let laaneFilmGenre = { ...request.body }
  Db.addLaaneFilmGenre(laaneFilmGenre).then(data => {
    response.status(201).json(data);
  })
})

// Laane Film Instruktoer

router.route('/laane-film-instruktoer').post((request, response) => {
  let laaneFilmInstruktoer = { ...request.body }
  Db.addLaaneFilmInstruktoer(laaneFilmInstruktoer).then(data => {
    response.status(201).json(data);
  })
})

// Lane Kurv

router.route('/laane-kurv/:Id').get((request, response) => {
  Db.getLaaneKurv(request.params.Id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-kurv').post((request, response) => {
  let laaneKurv = { ...request.body }
  Db.addLaaneKurv(laaneKurv).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-kurv').patch((request, response) => {
  let laaneKurv = { ...request.body }
  Db.updateLaaneKurv(laaneKurv).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-kurv').delete((request, response) => {
  let laaneKurv = { ...request.body }
  Db.deleteLaaneKurv(laaneKurv).then(data => {
    response.status(201).json(data);
  })
})

// Laane Ordre Detaljer

router.route('/laane-ordre-detaljer/:id').get((request, response) => {
  Db.getLaaneOrdreDetaljer(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laane-ordre-detaljer').post((request, response) => {
  let laaneOrdreDetaljer = { ...request.body }
  Db.addLaaneOrdreDetaljer(laaneOrdreDetaljer).then(data => {
    response.status(201).json(data);
  })
})

router.route('/laane-ordre-detaljer').patch((request, response) => {
  let laaneOrdreDetaljer = { ...request.body }
  Db.updateLaaneOrdreDetaljer(laaneOrdreDetaljer).then(data => {
    response.status(201).json(data);
  })
})

// Ordre

router.route('/ordre').get((request, response) => {
  Db.getOrdrer().then((data) => {
    response.json(data[0]);
  })
})

router.route('/ordre/:brugernavn').get((request, response) => {
  Db.getOrdre(request.params.brugernavn).then((data) => {
    response.json(data[0]);
  })
})

router.route('/ordre-id/:id').get((request, response) => {
  Db.getOrdreId(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/ordre').post((request, response) => {
  let ordre = { ...request.body }
  Db.addOrdre(ordre).then(data => {
    response.status(201).json(data);
  })
})

router.route('/ordre').patch((request, response) => {
  let ordre = { ...request.body }
  Db.updateOrdre(ordre).then(data => {
    response.status(201).json(data);
  })
})

router.route('/ordre-status').patch((request, response) => {
  let ordre = { ...request.body }
  Db.updateOrdreStatus(ordre).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Billeder

router.route('/salgs-billede/:id').get((request, response) => {
  Db.getSalgsBillede(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-billede').post((request, response) => {
  let salgsBillede = { ...request.body }
  Db.addSalgsBillede(salgsBillede).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Film

router.route('/salgs-film').get((request, response) => {
  Db.getSalgsFilm().then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-film/:id').get((request, response) => {
  Db.getSalgsFilm(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-film-genre/:id').get((request, response) => {
  Db.getSalgsFilmG(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-film-instruktoer/:id').get((request, response) => {
  Db.getSalgsFilmI(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-film').post((request, response) => {
  let salgsFilm = { ...request.body }
  Db.addSalgsFilm(laaneFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-film-pris').patch((request, response) => {
  let salgsFilm = { ...request.body }
  Db.updateSalgsFilmPris(salgsFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-film-rabat').patch((request, response) => {
  let salgsFilm = { ...request.body }
  Db.updateSalgsFilmRabat(salgsFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-film-rabat-alle').patch((request, response) => {
  let salgsFilm = { ...request.body }
  Db.updateSalgsFilmRabatA(salgsFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-film-stand').patch((request, response) => {
  let salgsFilm = { ...request.body }
  Db.updateSalgsFilmStand(salgsFilm).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-film').delete((request, response) => {
  let salgsFilm = { ...request.body }
  Db.deleteSalgsFilm(salgsFilm).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Film Genre

router.route('/salgs-film-genre').post((request, response) => {
  let salgsFilmGenre = { ...request.body }
  Db.addSalgsFilmGenre(salgsFilmGenre).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Film Instruktoer

router.route('/salgs-film-instruktoer').post((request, response) => {
  let salgsFilmInstruktoer = { ...request.body }
  Db.addSalgsFilmInstruktoer(salgsFilmInstruktoer).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Kurv

router.route('/salgs-kurv/:Id').get((request, response) => {
  Db.getsalgsKurv(request.params.Id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-kurv').post((request, response) => {
  let salgsKurv = { ...request.body }
  Db.addSalgsKurv(salgsKurv).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-kurv').patch((request, response) => {
  let salgsKurv = { ...request.body }
  Db.updateSalgsKurv(salgsKurv).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-kurv').delete((request, response) => {
  let salgsKurv = { ...request.body }
  Db.deleteSalgsKurv(salgsKurv).then(data => {
    response.status(201).json(data);
  })
})

// Salgs Ordre Detaljer

router.route('/salgs-ordre-detaljer/:id').get((request, response) => {
  Db.getSalgsOrdreDetaljer(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgs-ordre-detaljer').post((request, response) => {
  let salgsOrdreDetaljer = { ...request.body }
  Db.addSalgsOrdreDetaljer(salgsOrdreDetaljer).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgs-ordre-detaljer').patch((request, response) => {
  let salgsOrdreDetaljer = { ...request.body }
  Db.updateSalgsOrdreDetaljer(salgsOrdreDetaljer).then(data => {
    response.status(201).json(data);
  })
})

router.route('/status').get((request, response) => {
  Db.getStatus().then((data) => {
    response.json(data[0]);
  })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);