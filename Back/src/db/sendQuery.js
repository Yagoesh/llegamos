const sendQuery = require("./initDb.js")

sendQuery(`DROP TABLE IF EXISTS llegamos.users`)
sendQuery(`CREATE TABLE IF NOT EXISTS llegamos.users (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(50), 
  surname VARCHAR(50),
  dob DATE,
  email VARCHAR(255),
  mobile VARCHAR(20),
  password VARCHAR(50)
  )`)
