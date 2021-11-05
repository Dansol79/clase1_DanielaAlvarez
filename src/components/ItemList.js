import Item from "./Item"



const ItemList = ( {datos})=>{
    
    if(datos.length ===0){
        return <p>Cargando...</p>
    
    }else{
           return(
                   <>
                        { datos.map( item => (
                                   
                                <li  className="divCard" >
                                   <Item key={item.id} item={item}/>
                                </li>
                                   
                        ) )} 
                         
                      </>
                             )
                }
            
               
    
}

export default ItemList