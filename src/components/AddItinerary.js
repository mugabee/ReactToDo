import Button from "./Button";

const AddItinerary = ({ text, setText, dateText, setDate, timeText, setTime }) => {
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Enter Your To do item"
        className="py-2  px-14 rounded-lg bg-gray-700 text-white tracking-wide"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="date"
        name="date"
        placeholder="Enter Your To do item"
        className="py-2 px-14 mt-4 rounded-lg bg-gray-700 text-white tracking-wide"
        value={dateText}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />

      <input
        type="time"
        name="time"
        placeholder="Enter Your To do item"
        className="py-2 px-14 mt-4 rounded-lg bg-gray-700 text-white tracking-wide"
        value={timeText}
        onChange={(e) => setTime(e.target.value)}
      />
      <br />
      <Button />
    </div>
  );
};

export default AddItinerary;
