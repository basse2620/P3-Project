const Db = require('../funktioner/laaneOrdreDetaljer');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const LaaneOrdreDetaljer = require("../models/laaneOrdreDetaljer");

router.get('/:id', (req, res) => {
    Db.getLaaneOrdreDetaljer(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('ordreId').notEmpty().withMessage("Ordre id'et navnet maa ikke vaere tomt"),
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('pris').notEmpty().withMessage("Prisen maa ikke vaere tomt"),
    check('statusId').notEmpty().withMessage("Status id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneOrdreDetaljer = { ...req.body }
    Db.addLaaneOrdreDetaljer(laaneOrdreDetaljer).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('ordreId').notEmpty().withMessage("Ordre id'et navnet maa ikke vaere tomt"),
    check('statusId').notEmpty().withMessage("Status id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneOrdreDetaljer = { ...req.body }
    Db.updateLaaneOrdreDetaljer(laaneOrdreDetaljer).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;