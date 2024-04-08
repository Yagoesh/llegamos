import styles from "./register.module.css"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/UserProvider"
import axios from "axios"
import { getTypeFromId } from "../helper/getTypeFromId"


function Price () {

const [calculated , setCalculated] = useState({})
const [carDetail , setCarDetail] = useState({})

const {budged} = useContext(UserContext)




async function getCalculate () {
try {
  const calculate = await axios.get(`http://localhost:3000/calculate/${budged}` ,{withCredentials:true} )
  const values = calculate.data[0]
  setCalculated(values)
  // convert CARID to detals
  const detailsCar = await axios.get(`http://localhost:3000/calculate/cars/${values.carId}` ,{withCredentials:true} )
  const carDetail = detailsCar.data[0]
  setCarDetail(carDetail)
  
  
} catch (error) {
  console.error(error.message)
}
}

useEffect(() => {
  
  getCalculate()
}, [])


const insurance = getTypeFromId(calculated.typeId)



  return(
    <>
    
    
    <div className={styles.priceDetail}>
    <h2>Price</h2>
      <div>
        <p> Car : {carDetail.brand_name} - {carDetail.model_name}</p>
      </div>
      <div>
        <p> Type of Insurance : {insurance}</p>
      </div>
      <div>
        <h3> For only : {calculated.price}</h3>
      </div>
  
    
      <form >
        <div><input type="text" placeholder="Number plate ..."/></div>
        <button>Start my insurance NOW!</button>
      </form>
   
    </div>
    </>
  )
}
export {Price}