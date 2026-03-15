function InfoPanel({ type, children }) {
    return (
        <div className={`infopanel infopanel--${type}`}>
            <figure className="infopanel__icon">{type === "alert" ? "⚠️" : type === "error" ? "🚨" : type === "success" ? "👍" : ""}</figure>
            {children}
        </div>
    )
}

export default InfoPanel;