import SvgIcon from "./SvgIcon";

function FloatingButton({ ref, position, action, bgColor, outlineColor, opacity, text, icon }) {
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
            ref={ref}
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