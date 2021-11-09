import { useState } from "react";
import { ToDoContext } from "./ToDoContext";
import { v4 as uuidv4 } from "uuid";

const ProviderToDo = (props) => {
  const getLocalStorage = () => {
    let items = localStorage.getItem("items");
    console.log(items);

    if (items) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  };

  const [editItems, setEditItems] = useState(null);
  const [text, setText] = useState("");
  const [dateText, setDate] = useState("");
  const [timeText, setTime] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  console.log(items);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      title: text,
      dates: dateText,
      timeSet: timeText,
      completed: false,
    };
    //Using the spread operator for the old items to  remain while adding the new ones
    setItems([newItems, ...items]);
    setText("");
    setDate("");
    setTime("");
  };

  const itemComplete = (id) => {
    console.log(id);
    setItems(
      items.map((singleItem) =>
        singleItem.id === id
          ? { ...singleItem, completed: !singleItem.completed }
          : singleItem
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const value = {
    items,
    itemComplete,
    deleteItem,
    handleSubmit,
    getLocalStorage,
    setItems,
    text,
    setText,
    dateText,
    setDate,
    timeText,
    setTime,
  };
  return (
    <ToDoContext.Provider value={value}>{props.children}</ToDoContext.Provider>
  );
};

export default ProviderToDo;
