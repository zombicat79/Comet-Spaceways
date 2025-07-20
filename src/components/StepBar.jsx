import { useContext } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';

function StepBar({ steps, progress }) {
    const { layoutState } = useContext(LayoutContext);


    return (
        <div className="stepbar">
        {steps.map((step, index) => {
            const stepItemClasses = index <= progress ? 'stepbar__item stepbar__item--checked' : 'stepbar__item';

            if (layoutState.viewportWidth <= 600 && index !== progress) return;

            return (
                <div key={step.id} className={stepItemClasses}>
                    <h4 className="stepbar__name">
                        <span className={step.name === 'flights' ? 'stepbar__icon stepbar__icon--flights' : 'stepbar__icon'}>{step.icon}</span>
                        <span>{step.name}</span>
                        <span className="stepbar__arrow">{'>'}</span>
                    </h4>
                </div>
            )
        })}    
        </div>
    )
}

export default StepBar;