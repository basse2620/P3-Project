const Db = require('../funktioner/kreditKort');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const KreditKort = require("../models/kreditKort");

router.get('/:kortnr/:cvc', (req, res) => {
    Db.getKreditKort(req.params.kortnr, req.params.cvc).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('kortnr').notEmpty().withMessage('Fornavn maa ikke være tom').isLength({ min: 16, max: 16 }),
    check('cvc').notEmpty().withMessage('Efternavn maa ikke for tom').isLength({ min: 3, max: 3}),
    check('kortholder').notEmpty().withMessage('Kortholder må ikke være tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let kreditKort = { ...req.body }
    Db.addKreditKort(kreditKort).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('kortnr').notEmpty().withMessage('Fornavn maa ikke være tom').isLength({ min: 16, max: 16 }),
    check('cvc').notEmpty().withMessage('Efternavn maa ikke for tom').isLength({ min: 3, max: 3}),
    check('saldo').notEmpty().withMessage('Saldoen må ikke være tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let kreditKort = { ...req.body }
    Db.updateKreditKortSaldo(kreditKort).then(data => {
        res.status(201).json(data);
    })
})

router.delete('/', [
    check('kortnr').notEmpty().withMessage('Fornavn maa ikke være tom').isLength({ min: 16, max: 16 }),
    check('cvc').notEmpty().withMessage('Efternavn maa ikke for tom').isLength({ min: 3, max: 3}),
    check('kortholder').notEmpty().withMessage('Kortholder må ikke være tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let kreditKort = { ...req.body }
    Db.deleteKreditKort(kreditKort).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;