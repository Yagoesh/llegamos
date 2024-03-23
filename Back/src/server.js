const express = require("express")
require("express-async-errors")
const app = express()
const cors = require('cors');
const {PORT} = require("../env");
const { errorsControler } = require("./controlers/errorsControler.js");

const userRouter = require('./routes/userRoutes.js');

app.use(express.json())
app.use(cors())



app.use("/user" , userRouter)


app.use((req, res , next) => {
res.status(500).send("No hay ninguna ruta con esa ruta")
})
app.use(errorsControler)



app.listen(PORT , () => {
  console.log(`eschuando al puerto ${PORT} ⚡`)
})