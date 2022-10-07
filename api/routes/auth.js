const express = require("express");
const router = express.Router();
const passport = require('passport')
const { req, res } = require('express');

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(200);
})

module.exports = router;