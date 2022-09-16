const Db = require('../funktioner/status');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Status = require("../models/status");

router.get('/', (req, res) => {
    Db.getStatus().then((data) => {
        res.json(data[0]);
    })
})

module.exports = router;