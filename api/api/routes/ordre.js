const Db = require('../funktioner/ordre');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Ordre = require("../models/ordre");

router.get('/', (req, res) => {
    Db.getOrdrer().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:brugernavn', (req, res) => {
    Db.getOrdre(req.params.brugernavn).then((data) => {
        res.json(data[0]);
    })
})

router.get('/id/:id', (req, res) => {
    Db.getOrdreId(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('totalPris').notEmpty().withMessage("Total prisen maa ikke vaere tomt"),
    check('statusId').notEmpty().withMessage("Status id'et maa ikke vaere tomt"),
    check('addresseId').notEmpty().withMessage("Addresse id'et maa ikke vaere tomt"),
    check('brugernavn').notEmpty().withMessage("Brugernavnet maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let ordre = { ...req.body }
    Db.addOrdre(ordre).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('datoSendt').notEmpty().withMessage("Dato sendt maa ikke vaere tomt"),
    check('statusId').notEmpty().withMessage("Status id'et maa ikke vaere tomt"),
    check('ordreId').notEmpty().withMessage("Ordre id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let ordre = { ...req.body }
    Db.updateOrdre(ordre).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/pris', [
    check('totalPris').notEmpty().withMessage("Total prisen maa ikke vaere tomt"),
    check('ordreId').notEmpty().withMessage("Ordre id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let ordre = { ...req.body }
    Db.updateOrdrePris(ordre).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/status', [
    check('statusId').notEmpty().withMessage("Status id'et maa ikke vaere tomt"),
    check('ordreId').notEmpty().withMessage("Ordre id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let ordre = { ...req.body }
    Db.updateOrdreStatus(ordre).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;