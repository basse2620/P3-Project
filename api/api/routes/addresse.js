const Db = require('../funktioner/addresse');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Addresse = require("../models/addresse");

// Henter alle film
router.get('/', (req, res) => {
    Db.getAddresse().then((data) => {
        res.json(data[0]);
    })
})


router.get('/:id', (req, res) => {
    Db.getAddresseId(req.params.id).then((data) => {
        res.json(data[0]);
    })
})

router.get('/post-nr/:postNr', (req, res) => {
    Db.getAddressePostNr(req.params.postNr).then((data) => {
        res.json(data[0]);
    })
})

router.post('/', [
    check('addresse').notEmpty().withMessage('Addressen maa ikke vaere tom'),
    check('postNr').notEmpty().withMessage('Post Nr maa ikke vaere tom')
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let addresse = { ...req.body }
    Db.addAddresse(addresse).then(data => {
        res.status(201).json(data);
    })
})

router.patch('/', [
    check('addresseId').notEmpty().withMessage('Addressens id maa ikke vaere tom'),
    check('addresse').notEmpty().withMessage('Addressen maa ikke vaere tom'),
    check('postNr').notEmpty().withMessage('Post Nr maa ikke vaere tom')
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    let addresse = { ...req.body }
    Db.updateAddresse(addresse).then(data => {
        res.status(201).json(data);
    })
})

module.exports = router;