import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "./components/ItemCount"



 const ItemDC = (()=>{
   const [datos, setDatos] =useState([])

    useEffect(() => {
       
      const obtenerDatos = async () =>{
         const data = await fetch("https://618006028bfae60017adf952.mockapi.io/articlos")
     
         const prod = await data.json()

         setDatos(prod)
         console.log(prod)
      } 
       obtenerDatos()
      
    },[])

     
     
        
    if(datos.length ===0){
        return <p>Cargando...</p>

    }else{
           return(
                   <>
                        { 
                              datos.map( item => (
                                   
                                  <li className="divCard" key={item.id}>
                                    <Link to={`/artSelec/${item.id}`}>
                                     
                                      <h3 >{item.name}</h3>
                                       <img src={item.imagen}
                                       alt="imagPro"
                                       className="stiloimg"
                                      ></img> 
                                       <p>$ {item.price}</p>
                                      <ItemCount/>
                                     </Link>
                                      </li>
                                   
                                  ) )
                         } 
                      </>
                             )
                }
             
               
 })

 export default ItemDC;