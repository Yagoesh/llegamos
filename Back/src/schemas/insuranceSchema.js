const {z} = require("zod")

const insuranceSchema = z.object({
  numberPlate: z.string().regex(/^\d{4}[A-Za-z]{3}$/, {message : "the number plate has to have 4 numbers followed by 3 letters"}) ,
  calculateId: z.number()
  })

module.exports=insuranceSchema