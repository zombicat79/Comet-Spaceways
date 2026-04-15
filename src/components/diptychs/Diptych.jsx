import NheDiptych from "./configs/NheDiptych";

function Diptych(props) {
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
                <img src={`/assets/images/characters/${props.img}`} alt={`${props.title} poster`} />
            </figure>
            <article className="diptych__content">{diptychContent}</article>
        </section>
    )
}

export default Diptych;