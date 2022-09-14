const Db = require('../funktioner/laaneBilleder');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const LaaneBilleder = require("../models/LaaneBilleder");

router.get('/:id', (req, res) => {
    Db.getLaaneBillede(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('link').notEmpty().withMessage('Link maa ikke være tom'),
    check('beskrivelse').notEmpty().withMessage('beskrivelse maa ikke for tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let laaneBillede = { ...req.body }
    Db.addLaaneBillede(laaneBillede).then(data => {
        res.status(201).json(data);
    })
})
module.exports = router;