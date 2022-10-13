const Db = require('../funktioner/laaneFilmGenre');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const LaaneFilmGenre = require("../models/laaneFilmGenre");

router.post('/', [
    check('filmId').notEmpty().withMessage("Film id'et navnet maa ikke vaere tomt"),
    check('genreId').notEmpty().withMessage("Genre id'et maa ikke vaere tomt"),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneFilmGenre = { ...req.body }
    Db.addLaaneFilmGenre(laaneFilmGenre).then(data => {
        res.status(201).json(laaneFilmGenre);
    })
})

module.exports = router;