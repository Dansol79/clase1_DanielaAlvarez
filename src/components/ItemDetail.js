import ItemCount from "./ItemCount"

const ItemDetail = ({ articulo }) => {
   
    return(
        
        <ul  className="divCard">
           <li className="divCardD">
           <h3 className="pL" >{articulo.name}</h3>
           <img src={articulo.imagen} alt="imagPro" className="stiloimg" />
           <p className="pLL">$ {articulo.price}</p>
           <ItemCount/>
          </li>
       </ul>
    
    )
   
}

        


export default ItemDetail