import { createContext, useContext } from "react";

import ContentSection from "../../../layout/ContentSection";
import Avatar from "./../../Avatar";

import { capitalizeFirst } from "../../../utilities/utils";

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
function CharacterPiece({ relevantKeys }) {
    const panelData = useContext(PanelContext);

    return (
        <div className='panel__piece panel__piece--horizontal'>
            <Avatar character={panelData[relevantKeys[8]]} text={panelData[relevantKeys[0]] + " " + panelData[relevantKeys[1]]} />
            <div>
                {panelData[relevantKeys[2]] && <p><span>{`${relevantKeys[2].toUpperCase()}: `}</span><span>{panelData[relevantKeys[2]]}</span></p>}
                {panelData[relevantKeys[3]] && <p><span>{`${relevantKeys[3].toUpperCase()}: `}</span><span>{panelData[relevantKeys[3]]}</span></p>}
                {panelData[relevantKeys[4]] && <p><span>{`${relevantKeys[4].toUpperCase()}: `}</span><span>{panelData[relevantKeys[4]]}</span></p>}
                {panelData[relevantKeys[5]] && <p><span>{`${relevantKeys[5].toUpperCase()}: `}</span><span>{panelData[relevantKeys[5]]}</span></p>}
                {panelData[relevantKeys[6]] && <p><span>{`${relevantKeys[6].toUpperCase()}: `}</span><span>{panelData[relevantKeys[6]]}</span></p>}
                {panelData[relevantKeys[7]] && <p><span>{`${relevantKeys[7].toUpperCase()}: `}</span><span>{panelData[relevantKeys[7]]}</span></p>}
            </div>
        </div>
    )
}

function StatsPiece({ relevantKeys }) {
    const panelData = useContext(PanelContext);

    return (
        <div className='panel__piece'>
            {relevantKeys.map((key) => {
                if (typeof panelData[key] !== 'number') return null;

                return (
                    <div className='piece__dataWrapper'>
                        <span className='piece__dataIdentifier'>{key}</span>
                        <div className='piece__dataItem piece__dataItem--bar'>
                            <div className={`piece__dataProgress piece__dataProgress--${panelData[key]}`}  />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function StockPiece({ pieceTitle, relevantKeys }) {
    const panelData = useContext(PanelContext);

    return (
        <div className='panel__piece'>
            <h2 className='piece__title'>{pieceTitle}</h2>
            {relevantKeys.map((key) => {
                if (!Array.isArray(panelData[key])) return null;
                if (!panelData[key].length) return <span>Empty</span>

                return panelData[key].map((el) => {
                    return <span className='piece__dataItem piece__dataItem--piped'>{capitalizeFirst(el)}</span>
                })
            })}
        </div>
    )
}

function HistoryPiece({ pieceTitle }) {
    return (
        <div className='panel__piece'>
            <h2 className='piece__title'>{pieceTitle}</h2>
        </div>
    )
}

function SettingsPiece() {
    return (
        <div className='panel__piece'>

        </div>
    )
}

ControlPanel.CharacterPiece = CharacterPiece;
ControlPanel.StatsPiece = StatsPiece;
ControlPanel.SettingsPiece = SettingsPiece;
ControlPanel.HistoryPiece = HistoryPiece;
ControlPanel.StockPiece = StockPiece;

export default ControlPanel;