import { IoClose } from  "react-icons/io5"

const List = ({ items }) => {
    return (
        <>
        <article >
            <ul className="bg-gray-700 mx-5  rounded-lg mt-10">
                {items.map(({id, title }) => (
                    <ul className="flex border-b px-5 border-gray-600 justify-between">
                        <li key={id}
                        className="todo-list text-white  py-3 py-2 tracking-wider  "
                        >
                            {title}
                        </li>
                        <button>
                            <IoClose />
                        </button>


                    </ul>
                ))}
            </ul>
        </article>
        </>
    )
}

export default List
