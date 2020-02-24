const express = require('express');
const router = express.Router();
const auth = require('./../middleware/auth');

/** Route to get the admin details */
router.get('/admin' , auth , (req , res) => {
    res.status(200).json({
        status : 'ok'
    })
});

module.exports = router;