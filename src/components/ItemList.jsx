function ItemList({ data, ItemComponent, separation }) {

    return (
        <ul className={`list list--space${separation}`}>
        {data.map((el) => {
            return (
                <li className={`list__item`}>
                    <ItemComponent itemDetails={el} />
                </li>
            );
        })}
        </ul>
    )
}

export default ItemList;