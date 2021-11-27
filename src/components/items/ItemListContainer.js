import React, { useEffect, useState } from "react"
import { firestore } from "../../firebase/firebase"
import Slider from "../../slider/Slider"
import ItemList from "./ItemList"



const ItemListContainer = (() => {

   const [datos, setDatos] = useState([])


   useEffect(() => {

      const db = firestore
      const collection =  db.collection("articulo")

      collection
         .get()
         .then((querySnapshot) => {
           
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
         <div>
            <Slider/>
         </div>
         <ul className="divCardD">
            <ItemList datos={datos} />
         </ul>

      </div>
   )

})

export default ItemListContainer;