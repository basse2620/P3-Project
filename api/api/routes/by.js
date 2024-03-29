const Db = require('../funktioner/by');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const By = require("../models/by");

router.get('/', (req, res) => {
    Db.getByer().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:postnr', (req, res) => {
    Db.getBy(req.params.postnr).then((data) => {
        res.json(data[0]);
    })
})

module.exports = router;