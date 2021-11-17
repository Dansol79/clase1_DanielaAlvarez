import { createContext, useState } from "react"

export const contexto = createContext()
export const { Provider } = contexto

export const CustomProvider = ({ children }) => {


    const [cart, setCart] = useState([])

    const agregarArticulo = (cantidad, articulo) => {

        const existe = cart.find(item => item.articulo.name === articulo.name)

        if(!existe){
            const copia_cart = [...cart, { cantidad, articulo }]
            setCart(copia_cart)
        }else{
            const existe_cart = cart.map((item) =>{
                
                return item.articulo.name === articulo.name ? { cantidad: item.cantidad + cantidad, articulo } : item
               
            })
            setCart(existe_cart)

        }
       
    }
    const remover = (id) => {

        const newCart = cart.filter(item => item.articulo.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const valor_del_contexto = {
        cart: cart,
        agregarArticulo: agregarArticulo,
        remover: remover,
        clear: clear


    }
    return (

        <Provider value={valor_del_contexto} >
            {children}

        </Provider>
    )
}