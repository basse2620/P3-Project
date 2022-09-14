const Db = require('../funktioner/bruger');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Bruger = require("../models/bruger");

router.get('/', (req, res) => {
    Db.getBrugere().then((data) => {
        res.json(data[0]);
    })
})

router.get('/:brugernavn/:password', (req, res) => {
    Db.getBruger(req.params.brugernavn, req.params.password).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('brugernavn').notEmpty().withMessage('Brugernavn maa ikke være tom'),
    check('password').notEmpty().withMessage('Password Nr maa ikke for tom').isStrongPassword().withMessage('Passworded er ikke stærkt nok'),
    check('fornavn').notEmpty().withMessage('Fornavn maa ikke være tom'),
    check('efternavn').notEmpty().withMessage('Efternavn maa ikke være tom'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let bruger = { ...req.body }
    Db.addBruger(bruger).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('brugernavn').notEmpty().withMessage('Brugernavn maa ikke være tom'),
    check('password').notEmpty().withMessage('Brugernavn maa ikke være tom'),
    check('newPassword').notEmpty().withMessage('Nyt password maa ikke for tom').isStrongPassword().withMessage('Passworded er ikke stærkt nok'),
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    
    let bruger = { ...req.body }
    Db.updateBruger(bruger).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;