const Db = require('../funktioner/salgsFilmGenre');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsFilmGenre = require("../models/salgsFilmGenre");

router.post('/', [
    check('filmId').notEmpty().withMessage("Film id'et navnet maa ikke vaere tomt"),
    check('genreId').notEmpty().withMessage("Genre id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsFilmGenre = { ...req.body }
    Db.addSalgsFilmGenre(salgsFilmGenre).then(data => {
        res.status(201).json(salgsFilmGenre);
    })
})

module.exports = router;