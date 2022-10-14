const Db = require('../funktioner/salgsOrdreDetaljer');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsOrdreDetaljer = require("../models/salgsOrdreDetaljer");

router.get('/:id', (req, res) => {
    Db.getSaglsOrdreDetaljer(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('ordreId').notEmpty().withMessage("Ordre id'et navnet maa ikke vaere tomt"),
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('pris').notEmpty().withMessage("Prisen maa ikke vaere tomt"),
    check('maengde').notEmpty().withMessage("Maengden må ikke vaere tom")
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsOrdreDetaljer = { ...req.body }
    Db.addSalgsOrdreDetaljer(salgsOrdreDetaljer).then(data => {
        res.status(201).json(salgsOrdreDetaljer);
    })
})

module.exports = router;