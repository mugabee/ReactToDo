import AddIlinerary from "../components/AddItinerary"
import Button from "../components/Button"

const Add = (props) => {
    return (
        <div>
             <form className="flex item-center justify-center mt-10"
            onSubmit={props.handleSubmit}>  
             <AddIlinerary setText={props.setText} handleSubmit={props.handleSubmit} text={props.text}/>  
             <Button /> 

             </form>  
            
        </div>
    )
}

export default Add


