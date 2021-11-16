import React, { useEffect, useState } from "react"
import { firestore } from "../firebase/firebase"
import ItemList from "./ItemList"



const ItemListContainer = (() => {

   const [datos, setDatos] = useState([])


   useEffect(() => {

      const db = firestore
      const collection =  db.collection("articulo")

      collection
         .get()
         .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
               console.log("No results!");
             }

             setDatos(
               querySnapshot.docs.map((doc) => {
                  return { id: doc.id, ...doc.data() }
               })
            );
         })
         .catch((error) => {
            console.log("Error getting documents: ", error);
         })

   }, [])



   return (
      <div>
         <h2 className="dol">Dolce Ragazza</h2>

         <ul className="divCardD">
            <ItemList datos={datos} />
         </ul>

      </div>
   )

})

export default ItemListContainer;