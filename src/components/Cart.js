import { useContext } from "react";
import Login from "./form/Login";
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
        <h2 className="dol">Dolce Ragazza</h2>
        <h3 className="pL">No hay productos en el carrito</h3>
      </div>
    )
  }
  return (
    <>
      {!showLogin &&
        <div>
          <div>
            <h2 className="dol">Dolce Ragazza</h2>
          </div>
          <table className="tabla">
            <thead>
              <tr>
                <th className="paragraphTabla">Producto</th>
                <th className="paragraphTabla">Nombre</th>
                <th className="paragraphTabla">Precio</th>
                <th className="paragraphTabla">Cant.</th>
                <th className="paragraphTabla">Sub.Total</th>
              </tr>
            </thead>
            <tbody >
              {cart.map(item => (
                <tr key={item.id}>
                  <td><img src={item.articulo.imagen} alt={item.articulo.imagen} className="imgTabla" /></td>
                  <td className="paragraphTabla">{item.articulo.name}</td>
                  <td className="paragraphTabla">{item.articulo.price}</td>
                  <td className="paragraphTabla">{item.cantidad}</td>
                  <td className="paragraphTabla">{item.articulo.price * item.cantidad}</td>
                  <td><button className="btnCarrito" onClick={() => remover(item.articulo.name)}>X</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divBtns">
            <button className="btnVaciar" onClick={vaciarCarrito}> Vaciar Carrito </button>
            <button className="btnVaciar" onClick={() => setShowLogin(true)} > Comprar </button>
            <div>
              <h3 className="paragraphTabla">Total: {cart.reduce((acc, item) => acc + item.articulo.price * item.cantidad, 0)}</h3>
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






