const {z} = require("zod")

const insuranceSchema = z.object({
  type : z.enum([
  "third party" , "third party with theft, fire and windows", "full cover with deductible", "full cover"]).refine(val => val != null, { message: "type of insurance has NOT been sent" }),
  price: z.string().regex(/^\d{1,4}(\.\d{1,2})?$/).min(1),
  calculateId: z.string()
  })

module.exports=insuranceSchema