import home from './images/home.jpg';

const Contenedor = () => {

  

    return(
       
             <div className="contenedor_home">
             <h2 className="doll">Dolce Ragazza</h2>

                 <div className="divContacto">

                      <img src={home} alt={home} className="imgContacto"></img>
                 </div>

             </div>
        
    )
}

export default Contenedor;