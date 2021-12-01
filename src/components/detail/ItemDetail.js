import "./styloDetail.css"
import ItemCount from "../ItemCount";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../../context/cartContext";

const ItemDetail = ({ articulo }) => {
  const { push } = useHistory();

  const { agregarArticulo } = useContext(contexto);

  const onAdd = (cantidad) => {
    agregarArticulo(cantidad, articulo);

    push("/cart");
  };

  return (

    <div className="div_detail">
      <div>
        <div className="contenedor_imagen">
          <img src={articulo.imagen} alt="imagPro" className="imgen_dateil" />
        </div>
      </div>
      <div className="div_desdcripcion">
        <div>
          <h3 className="titulo_detail">{articulo.name}</h3>
        </div>
        <p className="descripcion">{articulo.descripcion}</p>
        <div>
          <p className="paragraph_precio">$ {articulo.price}</p>
          <ItemCount onAdd={onAdd} />
        </div>

      </div>
    </div>
  )
}


export default ItemDetail;
