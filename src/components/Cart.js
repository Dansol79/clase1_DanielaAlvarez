import { useContext } from "react"
import { contexto } from "../context/cartContext"

const Cart = () =>{

    const resultado = useContext(contexto)
    console.log(resultado)
    
    return(
        <h2 className="pL">Sol el futuro carrito</h2>
    )
}

export default Cart;