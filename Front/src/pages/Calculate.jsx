import { useState } from "react";
import axios from "axios"

function Calculate () {

  // * PARA VER PRESUS
  // conseguir token
  // ver si tiene presupuestos
  // sacar todos los presupuestos de ese token
  // boton que lleva al page un presupuesto con token

// * PARA HACER PRESUS BUDGEDS
  // crear otro endpoint para conseguir listado de brands y models


  const [selectedBrand, setSelectedBrand] = useState('');
const handleChangeBrand = (event) => {
  setSelectedBrand(event.target.value);
  }
  
  async function getBrands () {
    try {
      const brands = await axios.get("http://localhost:3000/calculate/cars" , {withCredentials:true})

      return brands.data.map(car => car.brand_name)

    } catch (error) {
      console.error(error.message)
    }
  }
  const brands = getBrands()
 
console.log(brands)
  // const brands = ["fkj " , "jdka"]
  
  return(
    <>
    <h1>Calculate</h1>
    <form>
    <select value={selectedBrand} onChange={handleChangeBrand}>

        {brands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>
      <p>Opción seleccionada: {selectedBrand}</p>

    </form>
    </>
  )
}
export {Calculate}