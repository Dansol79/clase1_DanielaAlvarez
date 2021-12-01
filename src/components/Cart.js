import { useContext } from "react";
import Login from "./form/Login";
import { Link } from 'react-router-dom'
import { contexto } from "../context/cartContext";
import { useState } from "react";



const Cart = () => {
  const { cart } = useContext(contexto);
  const { clear } = useContext(contexto);
  const { remover } = useContext(contexto);
  const [showLogin, setShowLogin] = useState(false);


  const vaciarCarrito = () => {
    clear();
  };


  if (!showLogin && cart.length === 0) {
    return (
      <div className="cart">
        <h2 className="titulo_principal">Dolce Ragazza</h2>
        <h3 className="paragraph_contacto">No hay productos en el carrito</h3>
      </div>
    )
  }
  return (
    <>
      {!showLogin &&
        <div>
          <div>
            <h2 className="titulo_principal">Dolce Ragazza</h2>
          </div>
          <table className="tabla">
            <thead>
              <tr>
                <th className="paragraph_tabla">Producto</th>
                <th className="paragraph_tabla">Nombre</th>
                <th className="paragraph_tabla">Precio</th>
                <th className="paragraph_tabla">Cant.</th>
                <th className="paragraph_tabla">Sub.Total</th>
              </tr>
            </thead>
            <tbody >
              {cart.map(item => (
                <tr key={item.id}>
                  <td><img src={item.articulo.imagen} alt={item.articulo.imagen} className="imagen_cart" /></td>
                  <td className="paragraph_tabla">{item.articulo.name}</td>
                  <td className="paragraph_tabla">{item.articulo.price}</td>
                  <td className="paragraph_tabla">{item.cantidad}</td>
                  <td className="paragraph_tabla">{item.articulo.price * item.cantidad}</td>
                  <td><button className="btnCarrito" onClick={() => remover(item.articulo.name)}>X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="div_btn">
            <button className="boton_vaciar" onClick={vaciarCarrito}> Vaciar Carrito </button>
            <Link className="boton_vaciar" exact to={"/"}> <p className="paragraph_boton">Seguir Comprando</p></Link>
            <button className="boton_vaciar" onClick={() => setShowLogin(true)} > Comprar </button>
            <div>
              <h3 className="paragraph_tabla">Total: {cart.reduce((acc, item) => acc + item.articulo.price * item.cantidad, 0)}</h3>
            </div>
          </div>
          <div>
          </div>
        </div>
      }
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </>
  );
}
export default Cart;






