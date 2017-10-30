var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'mingdan'
});
/* GET home page. */
router.get('/mingdan', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	connection.query('SELECT * FROM mingdan', function(err, rows, fields) {
		console.log(rows)
		res.send(rows);
	});
});

module.exports = router;