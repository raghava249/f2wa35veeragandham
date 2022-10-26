var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var num1 = Math.random()
    var num2= Math.cos(num1);
    var num3=Math.random()
    var num4=Math.asin(num1);
    var num5=Math.asinh(num3);
     res.render('computation', 
     { title: 'Raghavaa',
       num1:num1 ,
       num3:num3,
       cosfun:num2,
       asinfun:num4,
       asinhfun:num5
     });
});

module.exports = router;
