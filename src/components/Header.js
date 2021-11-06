import Nav from "../NavBar/Nav"

const Header = () =>{

    return(

        <header className="headerC" id="headerI">
            <h1 className="titleP">Dolce Ragazza</h1>
            <p>Bienvenida {"Daniela"} {"Alvarez"}</p>
           
           <Nav/>
        </header>
    )
}

export default  Header
