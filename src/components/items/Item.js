import { Link } from "react-router-dom"
import "./styloItems.css"


const Item = ({ item }) => {

        return (
                <>
                        <img src={item.imagen} alt="imagPro" className="stiloimg" />
                        <h3 className="titulo_item" >{item.name}</h3>
                        <p className="paragraph_item">$ {item.price}</p>
                        <Link to={`/articulo_Selec/${item.id}`}>
                                <button className="boton_vermas"> VER MAS...</button>
                        </Link>
                </>

        )



}


export default Item;