function StepBar({ steps }) {
    return (
        <div className="stepbar">
        {steps.map((step) => {
            return (
                <div className="stepbar__item">
                    <span className={step.name === 'flights' ? 'stepbar__icon stepbar__icon--flights' : 'stepbar__icon'}>{step.icon}</span>
                    <h4 className="stepbar__name">{step.name}</h4>
                    <span className="stepbar__arrow">{'>'}</span>
                </div>
            )
        })}    
        </div>
    )
}

export default StepBar;