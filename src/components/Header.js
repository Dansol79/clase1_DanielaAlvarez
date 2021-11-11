import Nav from "../NavBar/Nav"
import { Link } from "react-router-dom"

const Header = () =>{

    return(

        <header className="headerC" id="headerI">
            <Link to="/">
            <span className="titleP">Dolce Ragazza</span>
            </Link>
            <p>Bienvenida {"Daniela"} {"Alvarez"}</p>
           
           <Nav/>
        </header>
    )
}

export default  Header
