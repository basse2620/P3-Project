var  Db = require('./dboperations');
var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();
var  Bruger = require('./Bruger');
var  By = require('./By');
var  Kreditkort = require('./KreditKort')
var  Kurv = require('./Kurv');
var  LaaneFilm = require('./LaaneFilm')
var  LaaneKurv = require('./LaaneKurv')
var  laaneOrdreDetaljer = require('./laaneOrdreDetaljer')
var  Order = require('./Ordre');
var  SalgsFilm = require('./SalgsFilm')
var  SalgsKurv = require('./SalgsKurv')
var  SalgsOrdreDetaljer = require('./salgsOrdreDetaljer')


app.use(bodyParser.urlencoded({ extended:  true }));
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

router.route('/bruger/:brugernavn').get((request, response) => {
  Db.getBruger(request.params.brugernavn).then((data) => {
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

router.route('/kreditkort').get((request, response) => {
  Db.getKreditKort(request.params.kortnr, request.params.cvc).then((data) => {
    response.json(data[0]);
  })
})

router.route('/kreditkort/:kortnr').get((request, response) => {
  Db.getKreditKortnr(request.params.kortnr).then((data) => {
    response.json(data[0]);
  })
})

router.route('/kreditkort/:kortnr/:cvc').get((request, response) => {
  Db.getKreditKortcvc(request.params.kortnr, request.params.cvc).then((data) => {
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
  let  ordre = { ...request.body }
  Db.addOrdre(ordre).then(data  => {
    response.status(201).json(data);
  })
})

router.route('/ordreU').post((request, response) => {
  let  ordre = { ...request.body }
  Db.updateOrdre(ordre).then(data  => {
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
  
var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);