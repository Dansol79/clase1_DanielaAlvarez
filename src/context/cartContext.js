import { createContext, useState } from "react"

export const contexto = createContext()
export const { Provider } = contexto

export const CustomProvider = ({children}) =>{
   

    const [cart, setCart] = useState([])

    const agregarArticulo = (cantidad, articulo) =>{

        const copia_cart = [...cart, {cantidad, articulo}]

        setCart(copia_cart)
        console.log(copia_cart)
    }

    const remover = (articulo) =>{}

    const clear = () =>{
        setCart([])
    }

    const valor_del_contexto= {
        cart: cart,
        agregarArticulo: agregarArticulo,
        remover: remover,


    }
    return(

        <Provider value= {valor_del_contexto} >
            {children}
            
        </Provider>
    )
}