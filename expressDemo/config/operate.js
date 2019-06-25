var operate = {
    accountFindAccount : "select * from node_demo where account=?",
    accountFindUser : "select * from node_demo where account=? and password=?",
    accountAddSql : "insert into node_demo (id,account,password,status)values(?,?,?,?)",
}
module.exports = operate;