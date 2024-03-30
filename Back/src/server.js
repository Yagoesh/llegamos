const express = require("express")
const app = express()
const cors = require('cors');
const cookieParser = require("cookie-parser")
require("express-async-errors")

const {PORT} = require("../env");
const { errorsControler } = require("./controlers/errorsControler.js");
const userRouter = require('./routes/userRoutes.js');
const insuranceRouter = require("./routes/insuranceRoutes.js")

app.use(cookieParser())
app.use(cors({
  origin: "http:/localhost:5173",
  exposedHeaders:["Authorization"],
  credentials:true
}))
app.use(express.json())


app.use("/user" , userRouter)
app.use("/insurance" , insuranceRouter)


app.use((req, res , next) => {
res.status(500).send("No hay ninguna ruta con esa ruta")
})
app.use(errorsControler)



app.listen(PORT , () => {
  console.log(`eschuando al puerto ${PORT} ⚡`)
})