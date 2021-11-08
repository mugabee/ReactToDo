import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import { useState, useEffect } from "react"
import Navbar from "./components/Navbar";
import Title from "./components/Title"
import MainSection from "./components/MainSection"
import Footer from "./components/Footer"

//Universally unique identifier(uuid packages to new items to improve Their uniqueness and low probability in being repeated










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
  

    return ( 
        <> 
            
            <main className="lg:pb-96 lg:pt-10 bg-gradient-to-r from-purple-400 via-blue-700 to-indigo-400">
                <Navbar />
                <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 "> 
                
                   
                    <Title />         

                    {/* <form className="flex item-center justify-center mt-10"
                    onSubmit={handleSubmit}>  
                    <AddItinerary setText={setText} text={text} setEditItems={setEditItems} editItems={editItems} />     
                
                    <Button />
        
                    </form>   */}
                                        <Footer />
                </div> 
            </main> 

      
        </>
    )
}

export default App;