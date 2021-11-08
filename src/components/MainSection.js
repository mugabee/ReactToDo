import { MdDeleteForever } from  "react-icons/md"
import { MdPendingActions } from "react-icons/md"
import { FaEdit } from "react-icons/fa"
import { BsCheckAll } from "react-icons/bs"



const MainSection = ({ items, setItems, deleteItem, itemComplete, editItems, setEditItems }) => {
    console.log("hello")
    return (
        <>
        <article >
            <ul className="bg-gray-200 mx-5 sm:max-w-xl sm:mx-auto rounded-lg mt-4">
                {items.map(({id, title, completed }) => (
                    <ul className="flex border-b px-8 border-gray-600 justify-between">
                        <li key={id}
                        className="todo-list text-black  py-3   "
                        >
                            {title}
                        </li>
                        <li className="pt-4 ">
                        <button className="text-xl mx-2">
                            <FaEdit className="text-red-500 hover:text-green-500" />
                        </button>
                        <button className="text-xl mx-2 "
                        onClick ={() => console.log(id)}  >
                            { completed ? <BsCheckAll className="text-red-500  hover:text-green-500" /> : <MdPendingActions className="text-red-500  hover:text-green-500" />
                            }
                            
                            
                        </button>

                        <button onclick>submit</button>
                        <button className="text-xl mx-2 "
                        onClick ={() => deleteItem(id)}  >
                            <MdDeleteForever className="text-red-500  hover:text-green-500" />
                        </button>
                        
                        </li>
                        


                    </ul>
                ))}
                <ul className="flex items-center justify-between px-5 py-3">
                    <li>
                        <p className="text-xl font-bold text-green-500">
                             You have {items.length} Tasks
                        </p>
                    </li>
                    <li>
                        <button className="text-xl font-bold hover:text-red-500 text-green-500"
                        onClick= {() => setItems([])}
                        >Clear List
                        </button>
                    </li>
                </ul>
            </ul>
        </article>
        </>
    )
}

export default MainSection
