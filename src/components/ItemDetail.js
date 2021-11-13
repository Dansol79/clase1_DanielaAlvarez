import ItemCount from "./ItemCount";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../context/cartContext";

const ItemDetail = ({ articulo }) => {
  const { push } = useHistory();

  const { agregarArticulo } = useContext(contexto);

  const onAdd = (cantidad) => {
    agregarArticulo(cantidad, articulo);

    push("/cart");
  };

  return (

    <div className="divDetail">
      <div>
        <h3 className="pL">{articulo.name}</h3>
        <div  className="divCardD">
          <img src={articulo.imagen} alt="imagPro" className="stiloimg" />
        </div>
      </div>
      <div className="divDesdcripcion">
          <p className="descripcion">{articulo.descripcion}</p>
          <div>
         <p className="pLL">$ {articulo.price}</p>
        <ItemCount onAdd={onAdd} />
        </div>

        </div>
    </div>
  );
};

export default ItemDetail;
