import React, {useEffect,useState} from "react"
import {Link} from "react-router-dom"



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
                                      <h3 className="pL" >{item.name}</h3>
                                       <img src={item.imagen}
                                       alt="imagPro"
                                       className="stiloimg"
                                      ></img> 
                                       <p className="pLL">$ {item.price}</p>
                                       <button className="btnCarrito"> VER MAS...</button>
                                     </Link>
                                      </li>
                                   
                                  ) )
                         } 
                      </>
                             )
                }
             
               
 })

 export default ItemDC;