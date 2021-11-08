import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import Title from "./components/Title"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"
import Button from "./components/Button"
import AddItinerary from "./components/AddItinerary"
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
    const [editItems, setEditItems] = useState(null)
    const [text, setText] = useState("")
    const [items, setItems] = useState(getLocalStorage())

    const getData = (id)=>{
        fetch("http://localhost:1337/products/${id}",{})
        .then((response)=>response.json())
        .then((data)=>setItems(data))
        .catch(error=>console.log(error))
    }

    // to remove the loading event after text input
    const handleSubmit = (e) => {
        e.preventDefault()

        const newItems ={
            id: uuidv4(),
            title: text,
            completed: false,
        }
        //Using the spread operator for the old items to  remain while adding the new ones
        setItems([newItems, ...items])
        setText("")
    }
    const itemComplete = (id) =>{
        console.log(id)
        setItems(
            items.map((singleItem) =>{
                if(singleItem.id === id) {
                    return{...items, completed: !singleItem.completed}
                }
                return singleItem;

            })
        )
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
            
            <main className="lg:pb-96 lg:pt-10 bg-gradient-to-r from-purple-400 via-blue-700 to-indigo-400">
                {/* <Navbar /> */}
                <div>
                
          
          {/* <Route exact path="/About" element={<About/>}/>
          <Route exact path="/About" element={<Contact/>}/>
           */}
          
        

                </div>
                <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 "> 
                
                   
                    <Title />         

                    <form className="flex item-center justify-center mt-10"
                    onSubmit={handleSubmit}>  
                    <AddItinerary setText={setText} text={text} setEditItems={setEditItems} editItems={editItems} />     
                
                    <Button />
        
                    </form>  
                    <MainSection items={items} setItems={setItems} deleteItem={deleteItem} setEditItems={setEditItems} itemComplete={itemComplete}/>
                    <Footer />
                </div> 
            </main> 

      
        </>
    )
}

export default App;