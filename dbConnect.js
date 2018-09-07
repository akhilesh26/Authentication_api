var mysql = require('mysql')
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'your mysql password',
  database : 'HRG'
});

module.exports = pool;