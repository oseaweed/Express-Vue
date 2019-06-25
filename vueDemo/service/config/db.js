// var mysql = require("mysql");
// var pool = mysql.createConnection({
//     //连接mysql数据库
//     handle: mysql,
//     database: 'disposalcenter',
//     host: 'rm-bp1244pb26i5l8219.mysql.rds.aliyuncs.com',
//     port: '3306',
//     user: 'user_disposal',
//     password: 'Lunz2017',
// });

// function query(sql, callback) {
//     pool.getConnection(function (err, connection) {
//         connection.query(sql, function (err, rows) {
//             callback(err, rows);
//             connection.release();
//         });
//     });
// }

// exports.query = query;
module.exports = {
    //连接mysql数据库
    pool: {
        database: 'disposalcenter',
        host: 'rm-bp1244pb26i5l8219.mysql.rds.aliyuncs.com',
        port: '3306',
        user: 'user_disposal',
        password: 'Lunz2017',
    }
}