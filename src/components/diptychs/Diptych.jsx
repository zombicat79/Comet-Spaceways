import { useContext } from 'react';
import { LayoutContext } from '../../contexts/LayoutContext';

import NheDiptych from "./configs/NheDiptych";

function Diptych(props) {
    const { layoutState } = useContext(LayoutContext)

    let diptychContent;
    switch(props.theme) {
        case 'nhes':
            diptychContent = <NheDiptych {...props} />
            break;
        default:
            diptychContent = <></>
    }
    
    return (
        <section className={`diptych diptych--${props.alignment}`}>
            <figure className="diptych__media">
                {layoutState.viewportWidth < 1000 && <h1 className="diptych__heading">{props.title.toUpperCase()}</h1>}
                <img src={`/assets/images/characters/${props.img}`} alt={`${props.title} poster`} />
            </figure>
            <article className="diptych__content">{diptychContent}</article>
        </section>
    )
}

export default Diptych;