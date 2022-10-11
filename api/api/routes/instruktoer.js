const Db = require('../funktioner/instruktoer');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Instruktoer = require("../models/instruktoer");
const instruktoer = require('../funktioner/instruktoer');

router.get('/', (req, res) => {
    Db.getInstruktoer().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:id', (req, res) => {
    Db.getInstruktoerId(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/laane-film/:id', (req, res) => {
    Db.getInstruktoerLaaneFilm(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/salgs-film/:id', (req, res) => {
    Db.getInstruktoerSalgsFilm(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('fornavn').notEmpty().withMessage('Fornavn maa ikke vaere tom'),
    check('efternavn').notEmpty().withMessage('Efternavn maa ikke vaere tom')
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let instruktoer = { ...req.body }
    Db.addInstruktoer(instruktoer).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('instruktoerId').notEmpty().withMessage("Instruktoer Id'et må ikke vaere tomt"),
    check('fornavn').notEmpty().withMessage('Fornavn maa ikke vaere tom'),
    check('efternavn').notEmpty().withMessage('Efternavn maa ikke vaere tom')
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let instruktoer = { ...req.body }
    Db.updateInstruktoer(instruktoer).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;