function GenericPopup({ props }) {
    return (
        <main className="modalpiece">
            <h3 className="modalpiece__heading">{props.title}</h3>
            <article className={props.contentModifier ? `modalpiece__content modalpiece__content--${props.contentModifier}`: `modalpiece__content`}>
                {props.body}
            </article>
        </main>
    )
}

export default GenericPopup;