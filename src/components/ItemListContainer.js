import React, {useEffect,useState} from "react"
import { firestore } from "../firebase/firebase"
import ItemList from "./ItemList"



 const ItemListContainer = (()=>{

   const [datos, setDatos] =useState([])

   const arrArticulo = []

    useEffect(() => {
       
      const db = firestore
      const collection =  db.collection("articulo")

      const promesa = collection.get()

       promesa
         .then(documento =>{
            documento.forEach(doc =>{
              arrArticulo.push(doc.data())
            })
            setDatos(arrArticulo)
         })
         .catch(()=>{
            console.log("hubo un error")
         })
              
      },[])
  
  
        
   return(
           <div>
                <h2 className="dol">Dolce Ragazza</h2> 

               <ul className="divCardD">
                  <ItemList  datos={datos} />
               </ul>
   
            </div>
   )
               
 })

 export default ItemListContainer;