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


// import React, { Component } from 'react'
// import AddIlinerary from "../components/AddItinerary"

// const handleSubmit = (e) => {
//     e.preventDefault()

//     const newItems ={
//         id: uuidv4(),
//         title: text,
//         completed: false,
//     }
//     //Using the spread operator for the old items to  remain while adding the new ones
//     setItems([newItems, ...items])
//     setText("")
// }

// export default class About extends Component {
//     render() {
//         return (
            

//             <form className="flex item-center justify-center mt-10"
//             onSubmit={this.props.handleSubmit}>  
//             <AddIlinerary setText={this.props.setText} text={this.props.text}/>        <Button />

//             </form>  
//         )
//     }
// }
