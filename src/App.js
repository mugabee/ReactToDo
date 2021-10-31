import Logo from "./components/Logo"
import Hero from "./components/Hero"

const App = () => {
    return ( 
        <>       
            <main>        
                <Logo />        
                <Hero />  

                <form className="flex item-center justify-center mt-10">        
                <input
                    type="text"
                    name="text"
                    placeholder="Enter Your To do item"
                    className="py-2 px-5 rounded-lg bg-gray-700 text-white tracking-wide"
                    

                 />        
                </form>  
            </main> 
        </>
    )
}

export default App;