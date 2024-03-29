const express = require("express");
const router = express.Router();
router.get('/leaner', (req,res,next)=>{
    
res.status(200).json({data:"hello leaner"})

});


    
    module.exports = router;