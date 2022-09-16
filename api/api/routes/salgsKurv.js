const Db = require('../funktioner/salgsKurv');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsKurv = require("../models/salgsKurv");

router.get('/:id', (req, res) => {
    Db.getSalgsKurv(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('kurvId').notEmpty().withMessage("Kurv id'et navnet maa ikke vaere tomt"),
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('pris').notEmpty().withMessage("Prisen maa ikke vaere tomt"),
    check('maengde').notEmpty().withMessage("Maengden må ikke vaere tom")
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsKurv = { ...req.body }
    Db.addSalgsKurv(salgsKurv).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('kurvId').notEmpty().withMessage("Kurv id'et navnet maa ikke vaere tomt"),
    check('filmId').notEmpty().withMessage("Film id'et maa ikke vaere tomt"),
    check('pris').notEmpty().withMessage("Prisen maa ikke vaere tomt"),    
    check('maengde').notEmpty().withMessage("Maengden maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsKurv = { ...req.body }
    Db.updateSalgsKurv(salgsKurv).then(data => {
        res.status(201).json(data);
    })
})

router.delete('/', [
    check('kurvId').notEmpty().withMessage("Kurv id'et navnet maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsKurv = { ...req.body }
    Db.deleteSalgsKurv(salgsKurv).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;