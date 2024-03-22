require('dotenv').config();
const {MYSQL_HOST , MYSQL_USER , MYSQL_PASS, MYSQL_DATABASE , PORT} = process.env
module.exports={MYSQL_HOST , MYSQL_USER , MYSQL_PASS, MYSQL_DATABASE , PORT}