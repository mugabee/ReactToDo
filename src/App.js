

import Navbar from "./components/Navbar";
import Title from "./components/Title"
import Footer from "./components/Footer"


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
              {/* <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 "> 
                
                   
                    <Title />         

                    {/* <form className="flex item-center justify-center mt-10"
                    onSubmit={handleSubmit}>  
                    <AddItinerary setText={setText} text={text} setEditItems={setEditItems} editItems={editItems} />     
                
                    <Button />
        
                    </form>   
                                        <Footer />
                </div> */}
            </main>  

      
        </>
    )
}

export default App;