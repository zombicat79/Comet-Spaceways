function GenericPopup({ props }) {
    return (
        <main className="modalpiece">
            <h3 className="modalpiece__heading">{props.title}</h3>
            <article className="modalpiece__content">
                {props.body}
            </article>
        </main>
    )
}

export default GenericPopup;