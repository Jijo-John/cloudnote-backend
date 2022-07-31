const express = require('express');

const User = require('../models/User');

const router = express.Router();


// Create a User Using POST "/api/auth/"  Dos
router.post('/',(req, res)=> {
    
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.json(req.body);
}
)

module.exports = router;