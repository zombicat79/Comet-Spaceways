import { useState } from 'react';

function ItemList({ data, ItemComponent, separation }) {
    const [selected, setSelected] = useState(null);

    return (
        <ul className={`list list--space${separation}`}>
        {data?.map((el) => {
            return (
                <li key={el.item_id} className={`list__item`}>
                    {el.item_id === selected?.item_id
                    ? <ItemComponent itemDetails={el} onSelect={setSelected} selected={true} />
                    : <ItemComponent itemDetails={el} onSelect={setSelected} />
                    }
                </li>
            );
        })}
        </ul>
    )
}

export default ItemList;