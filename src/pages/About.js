import AddIlinerary from "../components/AddItinerary"

const About = (props) => {
    return (
        <div>
             <form className="flex item-center justify-center mt-10"
            onSubmit={props.handleSubmit}>  
             <AddIlinerary setText={props.setText} handleSubmit={props.handleSubmit} text={props.text}/>   

             </form>  
            
        </div>
    )
}

export default About


