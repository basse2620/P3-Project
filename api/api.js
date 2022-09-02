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
var Instuktoer = require('./instruktoer')
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

router.route('/addressepostnr/:postNr').get((request, response) => {
  Db.getAddressePostNr(request.params.postNr).then((data) => {
    response.json(data[0]);
  })
})

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


router.route('/by').get((request, response) => {
  Db.getByer().then((data) => {
    response.json(data[0]);
  })
})

router.route('/by/:postNr').get((request, response) => {
  Db.getBy(request.params.postNr).then((data) => {
    response.json(data[0]);
  })
})

// router.route('/by').post((request, response) => {
//   let  by = { ...request.body }
//   Db.addBy(by).then(data  => {
//     response.status(201).json(data);
//   })
// })

router.route('/kreditkort/:kortnr/:cvc').get((request, response) => {
  Db.getKreditKort(request.params.kortnr, request.params.cvc).then((data) => {
    response.json(data[0]);
  })
})

router.route('/kurv/:brugernavn').get((request, response) => {
  Db.getKurv(request.params.brugernavn).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laanefilm').get((request, response) => {
  Db.getLaaneFilm().then((data) => {
    response.json(data[0]);
  })
})

router.route('/laanefilm/:id').get((request, response) => {
  Db.getLaaneFilmen(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laanefilmg/:id').get((request, response) => {
  Db.getLaaneFilmen(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

router.route('/laanefilmM').post((request, response) => {
  let laanefilm = { ...request.body }
  Db.updateLaaneFilmMeangde(laanefilm).then(data => {
    response.status(201).json(data);
  })
})

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

router.route('/ordreid/:id').get((request, response) => {
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

router.route('/ordreU').post((request, response) => {
  let ordre = { ...request.body }
  Db.updateOrdre(ordre).then(data => {
    response.status(201).json(data);
  })
})

router.route('/salgsfilm').get((request, response) => {
  Db.getSalgsFilm().then((data) => {
    response.json(data[0]);
  })
})

router.route('/salgsfilm/:id').get((request, response) => {
  Db.getSalgsFilmen(request.params.id).then((data) => {
    response.json(data[0]);
  })
})

// router.route('/status/:id').delete((request, response) => {
//   Db.deleteStatus(request.params.id).then((data) =>{
//     response.json(data[0]);
//   })
// })

router.route('/status').delete((request, response) => {
  let status = { ...request.body }
  Db.deleteStatus(status).then(data => {
    response.status(201).json(data);
  })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);