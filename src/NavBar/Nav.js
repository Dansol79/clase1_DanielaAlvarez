import {Link} from "react-router-dom"

const Nav = () => {
    return ( 
        
       
        <>
        <nav>
       <Link to ="/productos" className="enlaces">Productos</Link>
       <Link to ="/contacto" className="enlaces">Contacto</Link>
       <Link to="/inicio" className="enlaces">Inicio</Link>
       </nav>
        </>
       
    )
}

export default Nav