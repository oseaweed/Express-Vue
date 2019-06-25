var operate = {
    accountAddSql : "insert into node_demo (id,account,password)values(?,?,?)",
    accountDelSql : "delete from node_demo  where account=2",
    accountChangeSql : "update node_demo set password='' where (account=3)",
    accountFindSql : "select * from node_demo where account=?"
}
module.exports = operate;