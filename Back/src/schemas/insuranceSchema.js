const {z} = require("zod")

const insuranceSchema = z.object({
  type : z.number().refine(val => val != null, { message: "type of insurance has NOT been sent" }),
  price: z.string().regex(/^\d{1,4}(\.\d{1,2})?$/).min(1),
  calculateId: z.string()
  })

module.exports=insuranceSchema