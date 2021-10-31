import { IoClose } from  "react-icons/io5"

const List = ({ items, setItems }) => {
    return (
        <>
        <article >
            <ul className="bg-gray-700 mx-5  rounded-lg mt-10">
                {items.map(({id, title }) => (
                    <ul className="flex border-b px-8 border-gray-600 justify-between">
                        <li key={id}
                        className="todo-list text-white  py-3 py-2 tracking-wider  "
                        >
                            {title}
                        </li>
                        <button className="text-xl">
                            <IoClose className="text-red-500" />
                        </button>


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
