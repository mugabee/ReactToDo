import { useState } from "react"
import Logo from "./components/Logo"
import Hero from "./components/Hero"
import List from "./components/List"

const App = () => {
    //to catch and insert the text
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    // to remove the loading event after text input
    const handleSubmit = (e) => {
        e.preventDefault()
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