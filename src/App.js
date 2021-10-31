import { useState } from "react"
import Logo from "./components/Logo"
import Hero from "./components/Hero"
import List from "./components/List"
//Universally unique identifier(uuid packages to new items to improve Their uniqueness and low probability in being repeated
import {v4 as uuidv4} from "uuid"

const App = () => {
    //to catch and insert the text
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    // to remove the loading event after text input
    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            tittle: text,
        }
        //Using the spread operator for the old items to  remain while adding the new ones
        setItems([newItems, ...items])
        //setting our input back to empty after inserting the to do text
        setText("")
    }
    return ( 
        <>       
            <main>        
                <Logo />        
                <Hero />  

                <form className="flex item-center justify-center mt-10"
                onSubmit={handleSubmit}>        
                <input
                    type="text"
                    name="text"
                    placeholder="Enter Your To do item"
                    className="py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    

                 />        
                </form>  
                <List />
            </main> 
        </>
    )
}

export default App;