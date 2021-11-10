import ItemCount from "./ItemCount"
import { useHistory } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "../context/cartContext"

const ItemDetail = ({ articulo }) => {
  
  const { push } = useHistory();
  
  const {agregarArticulo} = useContext(contexto)

  const onAdd = (cantidad) => {
    agregarArticulo(cantidad, articulo)
   
    push("/cart");
  };

  
  return (
    <ul className="divCard">
      <li className="divCardD">
        <h3 className="pL">{articulo.name}</h3>
        <p className="pLL">$ {articulo.price}</p>
        <img src={articulo.imagen} alt="imagPro" className="stiloimg" />
        <div>
        <p className="pLL">{articulo.descripcion}</p>
        </div>
        <ItemCount onAdd={onAdd}/>
      </li>
    </ul>
  );
};

export default ItemDetail;
