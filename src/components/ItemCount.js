import React, { useState } from "react"



const ItemCount = ({ onAdd }) => {


    const [contador, setContador] = useState(1)

    const stock = 5
    const min = 0
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > min) {
            setContador(contador - 1)
        }

    }

    const confirmar = () => {
        onAdd(contador)
    }



    return (
      
            <div className="flexCenter">
                <div className="contenedor_contador" >
                    <button onClick={restar} className="material-icons botones  btn_count"> remove</button>
                    <span className='contador'>{contador}</span>
                    <button onClick={sumar} className="material-icons botones   btn_count ">  add </button>
                </div>
                <div>
                    <button className="btnCarrito" onClick={confirmar}>Agregar al carrito</button>
                </div>
            </div>

 
    )
}






export default ItemCount