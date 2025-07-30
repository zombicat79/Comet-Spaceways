import { useState } from 'react';

function ItemList({ data, ItemComponent, separation }) {
    const [selected, setSelected] = useState(null);

    return (
        <ul className={`list list--space${separation}`}>
        {data.map((el) => {
            return (
                <li className={`list__item`}>
                    {el.id === selected?.id 
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