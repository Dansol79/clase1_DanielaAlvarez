import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemCount from "./ItemCount";



const ArtSelec = () =>{
    
    const {id} = useParams()
     console.log(id)

    const [articulo, setArticulo] =useState([])

    useEffect(() => {
       
      const obtenerDatos = async () =>{
         const data = await fetch(`https://617c956d1eadc500171362cd.mockapi.io/articulos/${id}`)
     
         const arti = await data.json()

         setArticulo(arti)
         console.log(arti)
      } 
       obtenerDatos()
      
    },[id])


    return(
        <li className="divCard">
          <h3 >{articulo.producto}</h3>
           <img src={articulo.img}
           alt="imagPro"
           className="stiloimg"
          ></img> 
           <p>$ {articulo.precio}</p>
          <ItemCount/>
          </li>
         )
}


export default ArtSelec