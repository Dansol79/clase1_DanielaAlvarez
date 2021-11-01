import React, {useState} from "react"



const ItemCount = () =>{
    const [contador, setContador] = useState(0)
    const stock = 5;
    const min = 1;
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
        <div className="divIC" >
        <h2>Stock</h2>
        <div className="divBtn">
        <button onClick={restar} className="material-icons  contadorR">remove</button>
        <span className='contador'>{contador}</span>
        <button onClick={sumar} className="material-icons contadorS">add</button>
        </div>
        </div>
        </>
    )
}






export default ItemCount 