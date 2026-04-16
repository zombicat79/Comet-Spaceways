function ListPopup({ props }) {
    return (
        <main className="modalpiece">
            <h3 className="modalpiece__heading">{props.title}</h3>
            <ul className={`modalpiece__list modalpiece__list--${props.alignment}`}>
            {props.list.map((el) => {
                const elementHeader = el.slice(0, el.indexOf(' – '));
                const elementBody = el.slice(el.indexOf(' – '), -1);
                return (
                    <li key={el.match(/\w+/)[0]} className="modalpiece__bulletpoint">
                        <span className="bulletpoint__header">{elementHeader}</span>
                        <span className="italic">{elementBody}</span>
                    </li>
                )
            })}    
            </ul>
        </main>
    )
}

export default ListPopup;