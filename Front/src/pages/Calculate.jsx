import { useContext, useEffect, useState } from "react";
import axios from "axios"
import styles from "./register.module.css"
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";


function Calculate () {
 const {setBudged} = useContext(UserContext)

  const [options, setOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [loading, setLoading] = useState(true)
  const [calculationDone, setCalculationDone] = useState(false)

  // * PARA VER PRESUS
  // conseguir token
  // ver si tiene presupuestos
  // sacar todos los presupuestos de ese token
  // boton que lleva al page un presupuesto con token

// * PARA HACER PRESUS BUDGEDS
  // crear otro endpoint para conseguir listado de brands y models


  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCity, setSelectedCity] = useState('');


  function handleChangeBrand (event)  {
  setSelectedBrand(event.target.value);
  }

  function handleChangeModel (event)  {
    setSelectedModel(event.target.value);
  }

  function  handleChangeType (event) {
    setSelectedType(event.target.value);

  }  
  function  handleChangeCity (event) {
    setSelectedCity(event.target.value);

  }
  
  async function handleCalculate (event) {
  event.preventDefault()
  const dataToSend = {
    carId : selectedModel, 
    typeId : selectedType, 
    city:selectedCity
  }  
  const price = await axios.post("http://localhost:3000/calculate" , dataToSend , {withCredentials:true} )
  console.log(price)
  setBudged(price)
  // setCalculationDone(true)
  }

  useEffect(() => {

    axios.get("http://localhost:3000/calculate/cars" , {withCredentials:true})
      .then(response => {
 
        const data = response.data;
      
    
        setOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Couldnt get data from API', error);
        setLoading(false);
        setCalculationDone(false)
      });
  }, [])

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:3000/calculate/models/${selectedBrand}`, {withCredentials:true})
      .then(response => {
        const data = response.data;
        setModelOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Couldnt get data from API', error);
        setLoading(false);
      });
  }, [selectedBrand])

  useEffect(() => {
    setLoading(true)
    axios.get("http://localhost:3000/calculate/cities" , {withCredentials:true})
      .then(response => {
 
        const data = response.data;
      
    
        setCityOptions(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Couldnt get data from API', error);
        setLoading(false);
      });
  }, [])
  
  return(
    <>
      
      <h2>Calculate</h2>
      <form onSubmit={handleCalculate}>
        
        <div>
          <select onChange={handleChangeBrand}>
          <option value={""}>
            Select a brand...
          </option>
            {options.map((option , index ) => (
              <option key={index} value={option.brand_name}>
                {option.brand_name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select onChange={handleChangeModel}>
          <option value={""}>
            Select a model...
          </option>
            {modelOptions.map((option  ) => (
              <option key={option.carId} value={option.carId}>
                {option.model_name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.separador}></div>

        <div>
          <select onChange={handleChangeType}>
          <option value={""}>
            Select a type of insurance...
          </option>
          <option value={1}> Third party </option>    
          <option value={2}> Third party with windows</option>    
          <option value={3}> Third party with windows , fire & theft</option>    
          <option value={4}> Full cover with deductible </option>    
          <option value={5}> Full cover </option>    
          </select>
        </div>

        <div className={styles.separador}></div>

        <div>
          <select onChange={handleChangeCity}>
          <option value={""}>
            Select city ...
          </option>
            {cityOptions.map((option , index ) => (
              <option key={index} value={option.city}>
                {option.city}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.separador}></div>


        <button >Calculate</button>
        {calculationDone && <Navigate to="/price" />}


      </form>
    </>
  )
}
export {Calculate}