import React, {useEffect,useState} from "react"
import ItemCount from "./ItemCount";



 const ItemDC = (()=>{
   const [datos, setDatos] = useState([])

    useEffect(() => {
      const resultado = fetch("https://fakestoreapi.com/products/1")
        

        resultado.then((data)=>{
           const nuevoProducto = data.json()
            
            return nuevoProducto
        })
        .then((nuevoProducto)=>{
           setDatos(nuevoProducto)
           console.log(nuevoProducto)
         })
    },[])
   
    if(datos.length ===0){
        return <p>Cargando...</p>

    }else{
                    return(
                                <>
                                <div className="divCard" key={datos.id}>
                                <li >{datos.title}
                                <img src={datos.image}
                                 alt="imagPro"
                                 className="stiloimg"
                                 ></img>
                                 <p>{datos.price}</p>
                                 <ItemCount/>
                                 </li>
                                </div>
                                </>
                            )
                       
                }
             

 })

 export default ItemDC;