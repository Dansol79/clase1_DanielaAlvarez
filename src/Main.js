import ILContainer from "./ILContainer"
import ItemList from "./ItemList"
import ItemD from "./ItemDateil"

const Main = () =>{

    return(
       <>
       <section className="secPrimera">
       <div>
        <h2 className="dol">Dolce Ragazza</h2>
        </div>
        <ItemD/>
        <ItemList/>
        <ILContainer/>
        </section>
       </>
    )
}






export default Main