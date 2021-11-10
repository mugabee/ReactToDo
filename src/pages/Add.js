import AddIlinerary from "../components/AddItinerary"
import { ToDoContext } from "../context/ToDoContext";
import { useContext } from "react";


const Add = (props) => {
    const { handleSubmit } = useContext(ToDoContext)
    return (
        <div>
             <form className="flex item-center justify-center mt-10"
            onSubmit={handleSubmit}>  
              <AddIlinerary /> 
             </form>  
            
        </div>
    )
}

export default Add


