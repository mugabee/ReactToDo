import AddIlinerary from "../components/AddItinerary"
import { ToDoContext } from "../context/ToDoContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";


const Add = () => {
    const { handleSubmit } = useContext(ToDoContext)
    const history = useHistory();
    const submit = (e) => {
        e.preventDefault()
        handleSubmit()
        history.push("/")



    }
    return (
        <div>
             <form className="flex item-center justify-center mt-10"
            onSubmit={submit}>  
              <AddIlinerary /> 
             </form>  
            
        </div>
    )
}

export default Add


