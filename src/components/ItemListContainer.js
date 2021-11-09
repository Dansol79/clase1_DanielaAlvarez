import React, {useEffect,useState} from "react"
import ItemList from "./ItemList"



 const Item = (()=>{
   const [datos, setDatos] =useState([])

    useEffect(() => {
      setTimeout(()=>{
      const obtenerDatos = async () =>{
         const data = await fetch("https://618006028bfae60017adf952.mockapi.io/articlos")
     
         const prod = await data.json()

         setDatos(prod)
      } 
   
       obtenerDatos()
      },1000)
    },[])
  
        
   return(
           <div>
                <h2 className="dol">Dolce Ragazza</h2> 

               <ul className="divCardD">
                  <ItemList  datos={datos} />
               </ul>
   
            </div>
   )
               
 })

 export default Item;