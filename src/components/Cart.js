import { useContext } from "react";
import { contexto } from "../context/cartContext";

const Cart = () => {
  const { cart } = useContext(contexto);
  const { clear } = useContext(contexto);
  const { remover } = useContext(contexto);

  const vaciarCarrito = () => {
    clear();
  };

  return (
    <>
      <div>
        <h2 className="dol">Dolce Ragazza</h2>
      </div>
      <table className="tabla">
        <thead>
          <tr>
            <th className="paragraphTabla">Producto</th>
            <th className="paragraphTabla">Nombre</th>
            <th className="paragraphTabla">Precio</th>
            <th className="paragraphTabla">Cantidad</th>
          </tr>

        </thead>
        <tbody >

          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.articulo.imagen} alt={item.articulo.imagen} className="imgTabla" /></td>
              <td className="paragraphTabla">{item.articulo.name}</td>
              <td className="paragraphTabla"> Total: {item.articulo.price * item.cantidad}</td>
              <td className="paragraphTabla">{item.cantidad}</td>
              <td><button className="btnCarrito" onClick={() => remover(item.articulo.id)}>X</button></td>
            </tr>

          ))}


        </tbody>

      </table>
      <div>
        <h3 className="paragraphTabla">Total: {cart.reduce((acc, item) => acc + item.articulo.price * item.cantidad, 0)}</h3>
        <button className="btnVaciar" onClick={vaciarCarrito}> Vaciar Carrito </button>
        <button className="btnVaciar"> Comprar </button>
        </div>;

    </>
  );
};

export default Cart;

