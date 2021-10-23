import React, {useState} from "react"


const ItemCount = () =>{
    const [contador, setContador] = useState(0)
    const stock = 5;
    const min = 0;
    const sumar = (() =>{
        if(contador < stock ){
            setContador(contador +1)
        }
    }) 
    const restar = (() =>{
        if(contador > min){
            setContador(contador -1)

        }
    }) 
    return(
        <>
        <div>
        <p className='contador'>{contador}</p>
        <button onClick={restar} className="material-icons  contadorR">remove</button>
        <button onClick={sumar} className="material-icons contadorS">add</button>
        </div>
        </>
    )
}






export default ItemCount 