import { useContext } from 'react'
import {contexto} from '../context/cartContext'


const CardWiget = () => {

  const {cart} = useContext(contexto)
  
  
  return (
    <div className="enlaces">
      <span className="material-icons">shopping_cart</span>
      {cart.length}
    </div>
  );
};

export default CardWiget;
