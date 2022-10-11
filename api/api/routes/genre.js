const Db = require('../funktioner/genre');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Genre = require("../models/genre");


router.get('/', (req, res) => {
    Db.getGenre().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:id', (req, res) => {
    Db.getGenren(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/laane-film/:id', (req, res) => {
    Db.getGenreLaaneFilm(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/salgs-film/:id', (req, res) => {
    Db.getGenreSalgsFilm(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

module.exports = router;