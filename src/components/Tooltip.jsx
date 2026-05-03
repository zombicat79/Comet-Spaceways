function Tooltip({ title, body, color }) {
    return (
        <div className={`tooltip tooltip--${color}`}>
            <h6 className="tooltip__title">{title}</h6>
            {body && <div className="tooltip__body">{body}</div>}
        </div>
    )
}

export default Tooltip;