import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"
import ItemCount from "./ItemCount";



 const ItemDC = (()=>{
   const [datos, setDatos] =useState([])

    useEffect(() => {
       
      const obtenerDatos = async () =>{
         const data = await fetch("https://617c956d1eadc500171362cd.mockapi.io/articulos")
     
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
                                     
                                      <h3 >{item.producto}</h3>
                                       <img src={item.img}
                                       alt="imagPro"
                                       className="stiloimg"
                                      ></img> 
                                       <p>$ {item.precio}</p>
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