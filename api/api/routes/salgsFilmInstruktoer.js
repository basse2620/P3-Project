const Db = require('../funktioner/salgsFilmInstruktoer');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsFilmInstruktoer = require("../models/salgsFilmInstruktoer");

router.post('/', [
    check('filmId').notEmpty().withMessage("Film id'et navnet maa ikke vaere tomt"),
    check('instruktoerId').notEmpty().withMessage("Instruktoer id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsFilmInstruktoer = { ...req.body }
    Db.addSalgsFilmInstruktoer(salgsFilmInstruktoer).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;