var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../config/db');
var operate = require('../config/operate');
var connection = mysql.createConnection(db.pool);
var crypto = require('crypto');
connection.connect();
// 解决跨域请求
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);
  else next();
});
// 注册
router.post('/register', function (req, res) {
  const {
    account,
    password
  } = req.body;
  // 哈希加密
  const hash = crypto.createHash('md5');
  const endPaW = hash.update(password).digest("hex");
  console.log(111, endPaW)
  if (!account) {
    res.send({
      msg: '用户名不能为空',
      state: false
    })
    return;
  }
  if (!password) {
    res.send({
      msg: '密码不能为空',
      state: false
    })
    return;
  }

  connection.query(operate.accountFindAccount, account, function (err, result) {
    if (err) throw err;
    if (result.length > 0) {
      res.send({
        state: false,
        msg: '该账号已经被注册'
      })
      return;
    }
    if (result.length === 0) {
      var userInfo = ['', account, password,''];
      connection.query(operate.accountAddSql, userInfo, (err, result) => {
        if (err) throw err;
        else {
          res.send({
            state: true,
            msg: '注册成功',
            result
          });
        }
      })
    }
  })
})
// 登录
router.post('/login', function (req, res) {
  const params = req.body;
  if (!req.body.account) {
    res.send({
      msg: '用户名不能为空',
      state: false
    })
    return;
  }
  if (!req.body.password) {
    res.send({
      msg: '密码不能为空',
      state: false
    })
    return;
  }
  var userInfo = [params.account, params.password];
  connection.query(operate.accountFindUser, userInfo, function (err, result) {
    if (err) throw err;
    if (result.length === 0) {
      res.send({
        state: false,
        msg: '账号或密码不正确'
      });
      return;
    }
    res.send({
      state: true,
      msg: '登录成功'
    })
  })
})
module.exports = router;