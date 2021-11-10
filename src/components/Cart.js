import { useContext } from "react"
import { contexto } from "../context/cartContext"

const Cart = () =>{

    const {cart} = useContext(contexto)
    const {clear} = useContext(contexto)
    const{remover} = useContext(contexto)

    const vaciarCarrito = ()=>{
        clear()
    }
    const removerItem = ()=>{
        remover()
    
        
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
                <p className="pLL">{item.cantidad}</p>
                <img src={item.articulo.imagen} alt="imagPro" className="stiloimg" />
                <p className="pLL"> $ {item.articulo.price}</p>
                <button className="btnCarrito" onClick={removerItem}>X</button>
               
            </li>
            </ul>
             <button  className="btnCarrito"  onClick ={vaciarCarrito}> Eliminar</button>
         </div>
         ))}
       
        </>

    )
}

export default Cart;