import { Link } from "react-router-dom";
import CardWiget from "../components/CardWiget";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="headerC" id="headerI">
          <Link to="/">
            <span className="titleP">Dolce Ragazza</span>
          </Link>
          <Link to="/productos" className="enlaces">
            Productos
          </Link>
          <Link to="/contacto" className="enlaces">
            Contacto
          </Link>
          <CardWiget />
        </nav>
      </header>
    </>
  );
};

export default Nav;
