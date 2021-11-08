import { useContext } from 'react'
import {contexto} from '../context/cartContext'


const CardWiget = () => {

  const {cart} = useContext(contexto)
  console.log(cart)
  return (
    <div className="enlaces">
      <span className="material-icons">shopping_cart</span>
    </div>
  );
};

export default CardWiget;
