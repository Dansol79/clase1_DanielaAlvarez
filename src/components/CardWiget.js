import { useContext } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../context/cartContext";

const CardWiget = () => {

  const { cart } = useContext(contexto);

  return (
         <Link to="/cart">
          <div className="enlaces">
             <span className="material-icons">shopping_cart</span>
            {cart.length}
          </div>
        </Link>
  );
};

export default CardWiget;
