function Tooltip({ title, body }) {
    return (
        <div className="tooltip">
            <h6 className="tooltip__title">{title}</h6>
            {body && <p className="tooltip__body">{body}</p>}
        </div>
    )
}

export default Tooltip;