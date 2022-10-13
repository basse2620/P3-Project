const Db = require('../funktioner/salgsBilleder');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const SalgsBilleder = require("../models/salgsBilleder");

router.get('/:id', (req, res) => {
    Db.getSalgsBillede(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('link').notEmpty().withMessage('Link maa ikke vaere tom'),
    check('beskrivelse').notEmpty().withMessage('beskrivelse maa ikke vaere tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let salgsBilleder = { ...req.body }
    Db.addSalgsBillede(salgsBilleder).then(data => {
        res.status(201).json(salgsBilleder);
    })
})

module.exports = router;