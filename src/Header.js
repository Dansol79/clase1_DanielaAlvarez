import Nav from "./Nav"


const Header = ({nombre,apellido}) =>{

    return(

        <header className="headerC" id="headerI">
            <h1 className="titleP">Dolce Ragazza</h1>
            <p>Bienvenida {'Daniela'} {'Alvarez'}</p>
            <span className="material-icons">
               shopping_cart
            </span>     
           <Nav/>
        </header>
    )
}

export default  Header
