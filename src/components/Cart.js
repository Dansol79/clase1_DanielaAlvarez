import { useContext } from "react"
import { contexto } from "../context/cartContext"

const Cart = () =>{

    const {cart} = useContext(contexto)
    const {clear} = useContext(contexto)
    const{remover} = useContext(contexto)

    const vaciarCarrito = ()=>{
        clear()
    }
    

    return(
        <>
        <div>
        <h2 className="dol">Dolce Ragazza</h2>
       </div> 
       {cart.map(item =>(

         <div className="contenedorID"> 
         <ul className="divCard">
           <li  className="divCardD" key={item.id}>
              <h3 className="pL">{item.articulo.name}</h3>
                <img src={item.articulo.imagen} alt="imagPro" className="stiloimg" />
                <p className="pLL">  Total: {item.articulo.price * item.cantidad} </p>
                <p className="pLL">Cant: {item.cantidad}</p>
                <button className="btnCarrito" onClick={ () =>remover(item.articulo.id)}>X</button>
               
            </li>
            </ul>
         </div>
         ))}
        <div>
        <button  className="btnCarrito"  onClick ={vaciarCarrito}> Vaciar Carrito</button>
        </div>
     </>
    )
}

export default Cart;