import { createContext, useState } from "react"

export const contexto = createContext()
export const { Provider } = contexto

export const CustomProvider = ({children}) =>{
   

    const [cart, setCart] = useState([]) 

    const agregarArticulo = (cantidad, articulo) =>{

        const copia_cart = [...cart, {cantidad, articulo}]

        setCart(copia_cart)
    }

    const remover = (articulo) =>{
        const copia_cart = cart.filter(item => item.id !== articulo)
        setCart(copia_cart)
        }

    const clear = () =>{
        setCart([])
    }

    const valor_del_contexto = {
        cart: cart,
        agregarArticulo: agregarArticulo,
        remover: remover,
        clear: clear


    }
    return(

        <Provider value= {valor_del_contexto} >
            {children}
            
        </Provider>
    )
}