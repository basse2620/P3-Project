const Db = require('../funktioner/laaneFilm');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const LaaneFilm = require("../models/laaneFilm");

router.get('/', (req, res) => {
    Db.getLaaneFilm().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:id', (req, res) => {
    Db.getLaaneFilmen(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/genre/:id', (req, res) => {
    Db.getLaaneFilmG(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/instruktoer/:id', (req, res) => {
    Db.getLaaneFilmI(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('filmNavn').notEmpty().withMessage('Film navnet maa ikke vaere tomt'),
    check('pris').notEmpty().withMessage('Prisen maa ikke vaere tom'),
    check('maengde').notEmpty().withMessage('Maengden maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.addLaaneFilm(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/pris', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('pris').notEmpty().withMessage('Prisen maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmPris(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/rabat', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('rabat').notEmpty().withMessage('Rabat maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmRabat(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/rabat-alle', [
    check('rabat').notEmpty().withMessage('Prisen maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmRabatA(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/maangde', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('maengde').notEmpty().withMessage('Maengde maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmMaengde(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/udlaant', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('udlaant').notEmpty().withMessage('Udlaant maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmUdlaant(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/resevert', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('resevert').notEmpty().withMessage('Resevert maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmResevert(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/vaereventet', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('vaereventet').notEmpty().withMessage('Forventet maa ikke vaere tom').isDate().withMessage("Forventet skal vaere en dato (YYYY-MM-DD)"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.updateLaaneFilmForventet(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

router.delete('/vaereventet', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilm = { ...req.body }
    Db.deleteLaaneFilm(laaneFilm).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;