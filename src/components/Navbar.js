import { useState, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
                    to="/About"
                    className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-3">
                  <Link
                    to="/Contact"
                    className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/About">
            <About setText={setText} handleSubmit={handleSubmit} text={text} />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
          <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 "> 
                
                   
                <Title /> 
                <MainSection items={items} setItems={setItems} deleteItem={deleteItem} setEditItems={setEditItems} itemComplete={itemComplete}/>
              <Footer />
            </div> 
      
                    </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;

// import React, { Component } from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Home from "../pages/Home";

// export default class Navbar extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isOpen: false,
//       text: "",
//     };
//     this.openMenu = this.openMenu.bind(this);
//     this.setText = this.setText.bind(this);
//   }

//   openMenu() {
//     this.setState(() => {
//       console.log(this.state.isOpen);
//       return { isOpen: !this.state.isOpen };
//     });
//   }
//   setText(text){
//       this.setState(()=>{
//           return {text}
//       }
//       )
//   }
//   render() {
//     const { isOpen, text } = this.state;
//     const menuOpen =
//       "w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
//     const menuClosed =
//       "w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20";
//     return (
//     <Router>
//       <nav className="w-full z-30 top-0 text-black py-1 lg:py-6">
//         <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
//           <div className="pl-4 flex items-center">
//             <Link
//               to="/"
//               className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
//             >
//               React Work
//             </Link>
//           </div>

//           <div className="block lg:hidden pr-4">
//             <button
//               id="nav-toggle"
//               onClick={this.openMenu}
//               className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
//             >
//               <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//               </svg>
//             </button>
//           </div>

//           <div className={isOpen ? menuOpen : menuClosed} id="nav-content">
//             <ul className="list-reset lg:flex justify-end flex-1 items-center">
//               <li className="mr-3">
//                 <Link
//                   to="/"
//                   className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="mr-3">
//                 <Link
//                   to="/About"
//                   className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="mr-3">
//                 <Link
//                   to="/Contact"
//                   className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     <Switch>
//        <Route path="/About">
//           <About setText={this.setText} text={text}/>
//         </Route>
//         <Route path="/Contact">
//          <Contact />
//         </Route>
//         <Route path="/Home">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>

//     );
//   }
// }
