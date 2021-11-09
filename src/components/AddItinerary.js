const AddItinerary = ({ text, setText }) => {
    return (
        <input
        type="text"
        name="text"
        placeholder="Enter Your To do item"
        className="py-2 px-14 rounded-lg bg-gray-700 text-white tracking-wide"
        value={text}
        onChange={(e) => setText(e.target.value)}
        

     /> 
     
    )
}

export default AddItinerary
