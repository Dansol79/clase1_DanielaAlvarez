import React, {useState} from "react"


const ItemCount = () =>{
    const [contador, setContador] = useState(0)
    const sumar = () => setContador(contador +1)
    const restar = () => setContador(contador -1)

    return(
        <>
        <p className='contador'>{contador}</p>
        <button onClick={restar} className="material-icons  contadorR">remove</button>
        <button onClick={sumar} className="material-icons contadorS">add</button>
        </>
    )
}






export default ItemCount 