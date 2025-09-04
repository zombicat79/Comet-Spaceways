import SvgIcon from "./SvgIcon";

function FloatingButton({ position, action, bgColor, outlineColor, opacity, text, icon }) {
    let outlineColorClass;
    switch(outlineColor) {
        case "#121212":
            outlineColorClass = "outline-black";
            break;
        default:
            outlineColorClass = "outline-white";
    } 
    
    return (
        <button 
            className={`btn btn--floating btn--floating--${outlineColorClass} btn--floating--bg-${bgColor} btn--floating--${position} btn--floating--${opacity}`}
            onClick={action}
        >
            {text 
            ? <p>{text}</p>
            : <div className="btn__icon"><SvgIcon design={icon} color={outlineColor} /></div>
            }
        </button>
    )
}

export default FloatingButton;