function Button({ type, action, text, isDisabled = false }) {

    return (
        <button 
            className={`btn btn--${type}`}
            onClick={action}
            disabled={isDisabled}
        >
            {text}
        </button>
    )
}

export default Button;