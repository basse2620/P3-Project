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
    check('kortNr').notEmpty().withMessage('Kort Nr maa ikke vaere tom').isLength({ min: 16, max: 16 })
    .withMessage("Kort Nr laengden er ikke korekt").isNumeric().withMessage("Kort Nr skal være tal"),
    check('cvc').notEmpty().withMessage('CVC maa ikke vaere tom').isLength({ min: 3, max: 3})
    .withMessage("CVC laengden er ikke korekt").isNumeric().withMessage("CVC skal være tal"),
    check('kortholder').notEmpty().withMessage('Kortholder må ikke vaere tom'),
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
    check('kortNr').notEmpty().withMessage('Kort Nr maa ikke vaere tom').isLength({ min: 16, max: 16 })
    .withMessage("Kort Nr laengden er ikke korekt").isNumeric().withMessage("Kort Nr skal være tal"),
    check('cvc').notEmpty().withMessage('CVC maa ikke vaere tom').isLength({ min: 3, max: 3})
    .withMessage("CVC laengden er ikke korekt").isNumeric().withMessage("CVC skal være tal"),
    check('saldo').notEmpty().withMessage('Saldoen må ikke vaere tom'),
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
    check('kortNr').notEmpty().withMessage('Kort Nr maa ikke vaere tom').isLength({ min: 16, max: 16 })
    .withMessage("Kort Nr laengden er ikke korekt").isNumeric().withMessage("Kort Nr skal være tal"),
    check('cvc').notEmpty().withMessage('CVC maa ikke vaere tom').isLength({ min: 3, max: 3})
    .withMessage("CVC laengden er ikke korekt").isNumeric().withMessage("CVC skal være tal"),
    check('kortholder').notEmpty().withMessage('Kortholder må ikke vaere tom'),
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