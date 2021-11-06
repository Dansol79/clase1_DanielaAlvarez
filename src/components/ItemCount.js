import React, {useState} from "react"



const ItemCount = ({onAdd}) =>{
    const [contador, setContador] = useState(0)

    const stock = 5
    const min = 0
    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > min){
            setContador(contador - 1)
        }
       
    }

    const confirmar = () => {
        onAdd(contador)
    }


    return( 
        <>
            <div className="flexCenter">
                <div className="contCarrito">
            <span className="material-icons shoppingCart  btnCon"> shopping_cart</span>
              </div>

           <div className="contenedorContador" >
                <button onClick={restar} className="material-icons botones  btnCon"> remove</button>
                <span className='contador'>{contador}</span>
                <button onClick={sumar} className="material-icons botones   btnCon ">  add </button>
                </div>
                <div>
                    <button className="btnCarrito" onClick={confirmar}>Agregar al carrito</button>
                </div>
           </div>

        </>
    )
}






export default ItemCount 