const List = ({ items }) => {
    return (
        <>
        <article>
            <ul>
                {items.map(({id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </article>
        </>
    )
}

export default List
