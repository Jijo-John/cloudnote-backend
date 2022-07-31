const express = require('express');
const router = express.Router();

router.get('/',(req, res)=> {
    obj = {
        title:'homehbh'
    }
    res.json( obj);
}
)

module.exports = router;