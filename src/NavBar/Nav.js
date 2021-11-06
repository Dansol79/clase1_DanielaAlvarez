import {Link} from "react-router-dom"
import CardWiget from "../components/CardWiget"

const Nav = () => {
    return ( 
        
       
        <>
        <nav>
            <CardWiget/>
        <Link to="/inicio" className="enlaces">Inicio</Link>
       <Link to ="/productos" className="enlaces">Productos</Link>
       <Link to ="/contacto" className="enlaces">Contacto</Link>
       </nav>
        </>
       
    )
}

export default Nav