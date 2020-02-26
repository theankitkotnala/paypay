const express = require('express');
const router = express.Router();
const AuthService = require('./../services/auth.service');

router.post('/login' ,  (req , res) => {
    const {email , password , isadmin} = req.body;
    if(isadmin) {

    }
});

module.exports = router;