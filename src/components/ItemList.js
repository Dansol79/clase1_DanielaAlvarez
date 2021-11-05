import Item from "./ItemListContainer"



const ItemList = ( {datos})=>{
    
    if(datos.length ===0){
        return <p>Cargando...</p>
    
    }else{
           return(
                   <>
                        { 
                              datos.map( datos => (
                                   
                                  <li className="divCard">
                                        <Item key={datos.id } datos={datos}/>
                                 </li>
                                   
                                  ) )
                         } 
                      </>
                             )
                }
            

    
}

export default ItemList