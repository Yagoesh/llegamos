 sendQuery = require("../../db/initDb");

async function getCities (req , res) {

    const cities = await sendQuery(`SELECT * FROM cities ` )
    res.status(200).send(cities)
    }
    module.exports= getCities