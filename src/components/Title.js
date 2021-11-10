import ReactTypingEffect from "react-typing-effect"
const Title = () => {
    return (
        <>
        <header className=" ">
        <h1 className="text-3xl  text-center  text-blue-500 mt-10 font-bold uppercase ">itinerary tracker </h1>

            <h1 className="text-center text-sm text-green-500 mt-2 font-light">Listen better. Plan better. Build better. </h1>
   
            <h1 className=" ml-40 text-2xl text-green-500 mt-10 font-bold "> Your <ReactTypingEffect
        text={["Daily Order List", "Things To Be Done", "ToDo List"]}
        speed={100}
        eraseSpeed={100}
        typingDelay={2500}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1 className="text-white">
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> </h1>
        </header>
            
        </>
    )
}

export default Title
