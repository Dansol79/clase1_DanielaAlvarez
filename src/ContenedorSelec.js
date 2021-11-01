import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemCount from "./components/ItemCount";



const ArtSelec = () =>{
    
    const {id} = useParams()

    const [articulo, setArticulo] =useState([])

  

    useEffect(() => {
      const obtenerDatos = async () =>{
         const data = await fetch (`https://618006028bfae60017adf952.mockapi.io/articlos/${id}`)
     
         const arti = await data.json()
   
         console.log(arti)
           setArticulo(arti)
      } 
      obtenerDatos();
      
    },[id])

    

    console.log(articulo)

    return(
        <li  className="divCardD" >
          <h3 className="pL" >{articulo.name}</h3>
           <img src={articulo.imagen}
           alt="imagPro"
           className="stiloimg"
          ></img> 
           <p className="pLL">$ {articulo.price}</p>
          <ItemCount/>
          </li>
         )
}


export default ArtSelec