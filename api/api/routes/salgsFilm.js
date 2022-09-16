const Db = require('../funktioner/salgsFilm');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsFilm = require("../models/salgsFilm");

router.get('/', (req, res) => {
    Db.getSalgsFilm().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:id', (req, res) => {
    Db.getSalgsFilmen(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/genre/:id', (req, res) => {
    Db.getSalgsFilmG(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/instruktoer/:id', (req, res) => {
    Db.getSalgsFilmI(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('filmNavn').notEmpty().withMessage('Film navnet maa ikke vaere tomt'),
    check('pris').notEmpty().withMessage('Prisen maa ikke vaere tom'),
    check('stand').notEmpty().withMessage('Standen maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsFilm = { ...req.body }
    Db.addSalgsFilm(salgsFilm).then(data => {
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

    let salgsFilm = { ...req.body }
    Db.updateSalgsFilmPris(salgsFilm).then(data => {
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

    let salgsFilm = { ...req.body }
    Db.updateSalgsFilmRabat(salgsFilm).then(data => {
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

    let salgsFilm = { ...req.body }
    Db.updateSalgsFilmRabatA(salgsFilm).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/stand', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('stand').notEmpty().withMessage('Stand maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsFilm = { ...req.body }
    Db.updateSalgsFilmStand(salgsFilm).then(data => {
        res.status(201).json(data);
    })
})

router.delete('/', [
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsFilm = { ...req.body }
    Db.deleteSalgsFilm(salgsFilm).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;