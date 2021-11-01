import ILContainer from "./ItemListContainer"
import ItemList from "./ItemList"

const Main = () =>{

    return(
       <>
       <section className="secPrimera">
       <div>
        <h2 className="dol">Dolce Ragazza</h2>
        </div>
        <ItemList/>
        <ILContainer/>
        </section>
       </>
    )
}






export default Main