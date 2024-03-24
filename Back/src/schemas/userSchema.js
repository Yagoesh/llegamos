const {z} = require("zod")
const telefonoMovilRegex = /^(?:(?:\+|00)34)?[6-9]\d{8}$/;
const userSchema = z.object({
  name: z.string().min(1).max(50),
  surname: z.string().min(1).max(50),
  dob: z.string(),
  email: z.string().email(),
  mobile: z.string().refine(value => telefonoMovilRegex.test(value), {
    message: 'Debe ser un número de teléfono móvil válido en España'
  }),
  password: z.string().min(4) 
});

module.exports=userSchema