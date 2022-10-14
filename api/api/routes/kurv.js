const Db = require('../funktioner/kurv');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Kurv = require("../models/kurv");

router.get('/:brugernavn', (req, res) => {
    Db.getKurv(req.params.brugernavn).then((data) => {
        res.json(data[0]);
    })
})

router.get('/laane/:brugernavn', (req, res) => {
    Db.getKurvLaane(req.params.brugernavn).then((data) => {
        res.json(data[0]);
    })
})

router.get('/salgs/:brugernavn', (req, res) => {
    Db.getKurvSalgs(req.params.brugernavn).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('brugernavn').notEmpty().withMessage('Brugernavn maa ikke vaere tom'),
    check('totalPris').notEmpty().withMessage('totalPris maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let kurv = { ...req.body }
    Db.addKurv(kurv).then(data => {
        res.status(201).json(kurv);
    })
})

router.patch('/', [
    check('brugernavn').notEmpty().withMessage('Brugernavn maa ikke vaere tom'),
    check('totalPris').notEmpty().withMessage('totalPris maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let kurv = { ...req.body }
    Db.updateKurv(kurv).then(data => {
        res.status(201).json(kurv);
    })
})

module.exports = router;