const express = require("express")
require("express-async-errors")
const app = express()
const cors = require('cors');
const {PORT} = require("../env");
const { errorsControler } = require("./controlers/errorsControler.js");
const cookieParser = require("cookie-parser")
const userRouter = require('./routes/userRoutes.js');

app.use(cookieParser())
app.use(cors({
  origin: "http:/localhost:5173",
  exposedHeaders:["Authorization"],
  credentials:true
}))
app.use(express.json())


app.use("/user" , userRouter)


app.use((req, res , next) => {
res.status(500).send("No hay ninguna ruta con esa ruta")
})
app.use(errorsControler)



app.listen(PORT , () => {
  console.log(`eschuando al puerto ${PORT} ⚡`)
})