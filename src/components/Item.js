import {Link} from "react-router-dom"


const Item = ({datos}) =>{
        return(

            <>
                     <Link to={`/artSelec/  ${datos.id}`}>
                     <h3 className="pL" >{datos.name}</h3>
                      <img src={datos.imagen} alt="imagPro"  className="stiloimg" /> 
                      <p className="pLL">$ {datos.price}</p>
                     <button className="btnCarrito"> VER MAS...</button>
                     </Link>
            </>
        )



}


export default Item;