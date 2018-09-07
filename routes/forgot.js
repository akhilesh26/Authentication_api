var express = require('express');
var router = express.Router();
var pool = require('../dbConnect'); 

/* GET users listing. */
router.get('/', function(req, res) {
  
    var email = req.param('email');

    pool.query('select * from user where email = ?',[email],(error,result)=>{
        if(error){
            res.send({
                "code":400,
                "success": false,
                "message":"error ocurred"
              })
        } else{

            if(result[0]){
 
                res.send({
                    "code":200,
                    "success": true,
                    "message":"Reset password link sent to the registered mail"
                });
                
            } else{

                res.send({
                  "code":204,
                  "success": false,
                  "message":"This email is not registered "
                });
            }
        }
    });

});

module.exports = router;
