const Db = require('../funktioner/addresse');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const LaaneFilmInstruktoer = require("../models/laaneFilmInstruktoer");



module.exports = router;