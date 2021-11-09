import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailConteiner = () =>{
    
    const {id} = useParams()

    const [articulo, setArticulo] =useState({})

  

    useEffect(() => {
      const obtenerDatos = async () =>{
         const data = await fetch (`https://618006028bfae60017adf952.mockapi.io/articlos/${id}`)
     
         const arti = await data.json()
   
           setArticulo(arti)
      } 
      obtenerDatos();

      
    },[id])

    return(
      <>
      
             <div>
                 <h2 className="dol">Dolce Ragazza</h2>
             </div>  
             <div className="contenedorID">
                  <ItemDetail articulo={articulo} />
            </div>
            <div className="contenedorID">
              <h3 className="pL">Significado del oro rosa</h3>
              <p className="paragraph">El mineral oro rosa está vinculado con el amor debido a su tonalidad, que también se relaciona con los sentimientos del corazón. Muchas personas ven esta roca como un compromiso de amor y trasmite el mensaje de estar enamorados. Al mismo tiempo, es una muestra de buenos propósitos e intenciones para la vida.</p>
            </div>

            <div className="contenedorID">
              <h3 className="pL">¿Qué es el oro rosa?</h3>
              <p className="paragraph"> El oro rosa, tal como lo indica su nombre, es un metal precioso que lleva una tonalidad rosada en la mayoría de su estructura.El matiz puede cambiar dependiendo de la composición y se considera una de las prendas más preciadas del mundo.
              Gracias a su tonalidad rosada se ha convertido en uno de los metales más buscados para la joyería.Combina en gran medida con otras piedras preciosas y logra una apariencia atractiva. </p>
            </div>
            <div className="contenedorID">
                <h3  className="pL">Origen del metal oro rosa</h3>
                <p  className="paragraph">El oro de color rosa remonta sus primeros usos a la Edad Media, donde se empleaba para la alquimia. Posteriormente, sobre todo en el siglo XIX, empezó a utilizarse en joyas rusas que con el paso del tiempo se extendieron a lo largo del planeta.En la actualidad, una pieza de oro con matices rosados es muy buscada para fabricar anillos, alianzas, pulseras, collares, relojes y prácticamente todo tipo de prenda.
               Sea como sea, sus orígenes todavía son ambiguos, aunque se supone que este material se debe a la fusión química de metales pesados con el hierro estelar. Como consecuencia, no se crea de forma natural en la tierra. Los científicos y alquimistas han tratado de producirlo con metales inferiores, pero es imposible.</p>
            </div>

        </>
    )
  }
       


export default ItemDetailConteiner