const Db = require('../funktioner/addresse');
const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { req, res } = require('express');

const Ordre = require("../models/ordre");



module.exports = router;