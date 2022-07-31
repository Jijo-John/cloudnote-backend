const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    obj = {
        title:'home'
    }
    res.json( obj);
}
)

module.exports = router;