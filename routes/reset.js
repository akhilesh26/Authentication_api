var express = require('express');
var router = express.Router();
var pool = require('../dbConnect');

/* GET users listing. */
router.put('/', function(req, res) {

    var email = req.body.email;
    var newPassword = req.body.newPassword;
    var confirmPassword = req.body.confirmPassword;
    
    if(newPassword != confirmPassword){
        res.send({
            "code":400,
            "success": false,
            "message":"confirm password is not matched"
          })
    } else{
        pool.query('update user set ? where ?',[{password: newPassword }, {email: email}],(error,result)=>{
            if(error){
                res.send({
                    "code":400,
                    "success": false,
                    "message":"error ocurred"
                  })
            } else{
    
                res.send({
                    "code":200,
                    "success": true,
                    "message":"Password has been successfully changed"
                });       
            }
        });
    }

    
});

module.exports = router;
