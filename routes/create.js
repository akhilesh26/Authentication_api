var express = require('express');
var router = express.Router();
var pool = require('../dbConnect');
/* GET users listing. */
router.post('/', function(req, res) {

  var userDetails = {
    "name":req.body.name,
    "email":req.body.email,
    "password":req.body.password
}

  pool.query('select * from user where email = ?',userDetails.email,(error, result) =>{
    
    if(result[0]){
      res.send('Email is already exits use another email');
    } else{
        pool.query('INSERT INTO user SET ?', userDetails, (error, result) => {
            if(error){
              console.log(error.message);
              res.send({
                  code:400,
                  status:false,
                  message: 'Some error accured'
              })
          } else {
              res.send({
                  code:200,
                  status:true,
                  message: 'Inserted successfully'
              })
          }
      });
    }
  });

});

module.exports = router;
