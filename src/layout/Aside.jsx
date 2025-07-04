import { useEffect, useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

function Aside({ side }) {
    const { layoutState } = useContext(LayoutContext);
    console.log('rendered')

    let asideClasses = `aside aside--${side}`;
    console.log('aside', layoutState)
    if (layoutState[`aside${side}`].shown) {
        asideClasses += ` aside--${side}--on`;
    }

    return (
        <aside className={asideClasses}>
            {layoutState[`aside${side}`].content}
        </aside>
    )
}

export default Aside;