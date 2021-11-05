
//  import ItemDetailConteiner from "./ItemDetailContainer"

import ItemCount from "./ItemCount"



 const ItemDetail = ({articulos}) =>{
    return(
        
        <ul  className="divCard">
           <li className="divCardD">
           <h3 className="pL" >{articulos.name}</h3>
           <img src={articulos.imagen} alt="imagPro" className="stiloimg" />
           <p className="pLL">$ {articulos.price}</p>
           <ItemCount/>
          </li>
       </ul>
    
    )
}

        


export default ItemDetail