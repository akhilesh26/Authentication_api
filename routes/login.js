var express = require('express');
var router = express.Router();
var pool = require('../dbConnect');

/* GET users listing. */
router.get('/', function(req, res) {
    //console.log(req);
    
    var email = req.param('email');
    var password = req.param('password');

    pool.query('select * from user where email = ?',[email],(error,result)=>{
        if(error){
            res.send({
                "code":400,
                "success": false,
                "message":"error ocurred"
              })
        } else{

            if(result[0]){

                if(result[0].password == password){

                    res.send({
                      "code":200,
                      "success": true,
                      "message":"login sucessfull"
                    });

                } else{

                    res.send({
                        "code":204,
                        "success": false,
                        "message":"Email and password does not match"
                    });

                }  
            } else{

                res.send({
                  "code":204,
                  "success": false,
                  "message":"Email does not exits"
                });
            }
        }
    });


  
});

module.exports = router;
