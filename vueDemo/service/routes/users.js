var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var operate = require('../config/operate');
var connection = mysql.createConnection(db.pool);
connection.connect();

// 注册
router.get('/register', function (req, res) {
  console.log('111')
  const params = req.body;
  res.send('查询成功');
 
})
module.exports = router;