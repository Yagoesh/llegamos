const mysql = require("mysql2/promise")
const {MYSQL_HOST , MYSQL_USER , MYSQL_PASS, MYSQL_DATABASE} = require("../../env.js")
const mysqlConfig = {
  host: MYSQL_HOST ,
  user: MYSQL_USER , 
  password: MYSQL_PASS , 
  database:MYSQL_DATABASE
}


let pool
async function createPool () {
  try {
    if(!pool) {
      pool =  mysql.createPool(mysqlConfig)
    }
    return pool
  } catch (error) {
    console.error(error.message)
  }
}



async function sendQuery (query , values) {
  try {
    const pool = await createPool()
    const [data] = await pool.query(query , values)

    return data
    
  } catch (error) {
    console.log("❌")
    console.error(error.message )
  }
}



module.exports=sendQuery


