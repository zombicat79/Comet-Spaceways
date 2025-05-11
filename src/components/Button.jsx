function Button({ type, action, text }) {

    return (
        <button 
            className={`btn btn--${type}`}
            onClick={action}
        >
            {text}
        </button>
    )
}

export default Button;