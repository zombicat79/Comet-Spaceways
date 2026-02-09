function Tooltip({ title, body, color }) {
    return (
        <div className={`tooltip tooltip--${color}`}>
            <h6 className="tooltip__title">{title}</h6>
            {body && <p className="tooltip__body">{body}</p>}
        </div>
    )
}

export default Tooltip;