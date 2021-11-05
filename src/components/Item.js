import {Link} from "react-router-dom"


const Item = ({ item}) =>{
    
        return(

            <>
                     <Link to={`/articulo_Selec/${item.id}`}>
                     <h3 className="pL" >{ item.name}</h3>
                      <img src={ item.imagen} alt="imagPro"  className="stiloimg" /> 
                      <p className="pLL">$ { item.price}</p>
                     <button className="btnCarrito"> VER MAS...</button>
                     </Link>
            </>
        )



}


export default Item;