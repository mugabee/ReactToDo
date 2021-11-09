import AddIlinerary from "../components/AddItinerary"

const Add = (props) => {
    return (
        <div>
             <form className="flex item-center justify-center mt-10"
            onSubmit={props.handleSubmit}>  
             <AddIlinerary setText={props.setText} dateText={props.dateText} setDate={props.setDate} handleSubmit={props.handleSubmit} text={props.text} timeText={props.timeText}  />  
             </form>  
            
        </div>
    )
}

export default Add


