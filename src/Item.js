/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect,useState} from "react"
import ItemCount from "./components/ItemCount"


const Item = () =>{
   const [productos, setProducto] = useState([]);

   useEffect(()=>{
       setTimeout(()=>{
        fetch("./producto.json")

       .then(res=>res.json())

       .then(data =>{
           setProducto(data.collar)
       })
     }, 1000)
       

   }, [])

  if(productos.length === 0){
      return<h2 className="pLL">Loading...</h2>
  }else{
    
    return(
        <>
            {productos.map((item) =>{
                return( 
                    <>
                   <div className="divCard" key={item.id}>                      
                                            <h3 className="pL">{item.producto}</h3>
                                            <img  src={item.img} alt="imagenCollar"className="stiloimg" ></img>
                                             <p>{item.descripcion}</p>
                       <ItemCount/>
                    </div>
                   </>
                    )
               })
             }   
        </>
 )

  }

}


export default Item