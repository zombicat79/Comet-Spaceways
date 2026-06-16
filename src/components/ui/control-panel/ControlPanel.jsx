import { createContext, useContext } from "react";

import ContentSection from "../../../layout/ContentSection";

// COMPOUND COMPONENT CONTEXT
const PanelContext = createContext();
function PanelProvider({ children, panelData }) {
    return (
        <PanelContext.Provider value={panelData}>
            {children}
        </PanelContext.Provider>
    )
}

// *----------------------*
// MAIN COMPONENT
function ControlPanel({ distribution, panelComponents, panelData }) {
    return (
        <PanelProvider panelData={panelData}>
            <div className={`panel panel--${distribution}`}>
                {panelComponents.map((el) => {
                    return <ContentSection>{el}</ContentSection>
                })}
            </div>
        </PanelProvider>
    )
}

// CHILD COMPONENTS
function CharData({ relevantKeys }) {
    console.log(relevantKeys)
    const panelData = useContext(PanelContext);
    for (const key in panelData) {
        console.log(key)
    }

    return (
        <div className='panel__item'>
            {panelData[relevantKeys[0]] && <div>{panelData[relevantKeys[0]]}</div>}
            {panelData[relevantKeys[1]] && <div>{panelData[relevantKeys[1]]}</div>}
            {panelData[relevantKeys[2]] && <div>{panelData[relevantKeys[2]]}</div>}
            {panelData[relevantKeys[3]] && <div>{panelData[relevantKeys[3]]}</div>}
            {panelData[relevantKeys[4]] && <div>{panelData[relevantKeys[4]]}</div>}
            {panelData[relevantKeys[5]] && <div>{panelData[relevantKeys[5]]}</div>}
            {panelData[relevantKeys[6]] && <div>{panelData[relevantKeys[6]]}</div>}
            {panelData[relevantKeys[7]] && <div>{panelData[relevantKeys[7]]}</div>}
        </div>
    )
}

ControlPanel.CharData = CharData;

export default ControlPanel;