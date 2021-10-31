import { useState, useEffect } from "react"
import Logo from "./components/Title"
import List from "./components/List"
//Universally unique identifier(uuid packages to new items to improve Their uniqueness and low probability in being repeated
import {v4 as uuidv4} from "uuid"

// passing the items to the local storage, just to keep our data incase we reload the page
const getLocalStorage = () => {
    let items = localStorage.getItem("items")

    if(items){
        return JSON.parse(localStorage.getItem("items"))
    } else {
        return []
    }
}

const App = () => {
    //to catch and insert the text
    const [text, setText] = useState("")
    const [items, setItems] = useState(getLocalStorage())

    // to remove the loading event after text input
    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            title: text,
        }
        //Using the spread operator for the old items to  remain while adding the new ones
        setItems([newItems, ...items])
        //setting our input back to empty after inserting the to do text
        setText("")
    }

    const deleteItem = (id) => {
        setItems(items.filter((item)=> item.id !==id))
    }
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    }, [items]
    )

    return ( 
        <>       
            <main>        
                <Logo />         

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
                <List items={items} setItems={setItems} deleteItem={deleteItem}/>
            </main> 
        </>
    )
}

export default App;