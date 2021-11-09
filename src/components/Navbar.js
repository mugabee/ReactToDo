import { useState, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Add from "../pages/Add";


import MainSection from "./MainSection";
import Footer from "./Footer";
import Title from "./Title";


const Navbar = () => {
    const getLocalStorage = () => {
        let items = localStorage.getItem("items")
        console.log(items);
    
        if(items){
            return JSON.parse(localStorage.getItem("items"))
        } else {
            return []
        }
    }
    
     const [editItems, setEditItems] = useState(null)
        const [text, setText] = useState("")
        const [items, setItems] = useState(getLocalStorage())
        console.log(items);

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
                items.map((singleItem) => 
                    singleItem.id === id ? {...singleItem, completed: !singleItem.completed}
                    : singleItem
                    // if(singleItem.id === id) {
                       // return{...items, completed: !singleItem.completed}
                    //}
                   // return singleItem;
    
                )
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
    <div>
      <Router>
        <nav className="w-full z-30 top-0 text-black py-1 lg:py-6">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
            <div className="pl-4 flex items-center">
              <Link
                to="/"
                className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              >
                React Work
              </Link>
            </div>
  
            <div className="" id="nav-content">
              
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <Link
                    to="/"
                    className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  >
                    Home
                  </Link>{" "}
                </li>{" "}
                <li className="mr-3">
                  {" "}
                  <Link
                    to="/Add"
                    className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  >
                    Add
                  </Link>
                </li>                
              </ul>
            </div>
          </div>
        </nav>
        <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 "> 
                
                   
                <Title /> 

          
        <Switch>

          <Route path="/Add">
            <Add setText={setText} handleSubmit={handleSubmit} text={text} />
          </Route>
         
          <Route path="/">
                <MainSection items={items} setItems={setItems} deleteItem={deleteItem} setEditItems={setEditItems} itemComplete={itemComplete}/>
            
      
        </Route>
        </Switch>
        <Footer />
            </div> 
      </Router>
    </div>
  );
};

export default Navbar;

