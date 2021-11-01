import { IoClose } from  "react-icons/io5"

const List = ({ items, setItems, deleteItem }) => {
    return (
        <>
        <article >
            <ul className="bg-gray-700 mx-5 sm:max-w-xl sm:mx-auto rounded-lg mt-10">
                {items.map(({id, title }) => (
                    <ul className="flex border-b px-8 border-gray-600 justify-between">
                        <li key={id}
                        className="todo-list text-white  py-3 tracking-wider  "
                        >
                            {title}
                        </li>
                        <li>
                        <button className="text-xl"
                        onClick ={() => deleteItem(id)}  >
                            <IoClose className="text-red-500" />
                        </button>
                        <button className="text-xl">
                            <IoClose className="text-red-500" />
                        </button>
                        </li>
                        


                    </ul>
                ))}
                <ul className="flex items-center justify-between px-5 py-3">
                    <li>
                        <p className="text-sm text-gray-400">
                             You have {items.length} Tasks
                        </p>
                    </li>
                    <li>
                        <button className="text-sm text-gray-400"
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

export default List
