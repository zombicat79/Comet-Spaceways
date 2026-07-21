import { createContext, useContext, useRef, useEffect, useState } from "react";

import ContentSection from "../../../layout/ContentSection";
import Avatar from "./../../Avatar";
import SvgIcon from "../../SvgIcon";
import Button from "../../Button";

import { capitalizeFirst, pruneString } from "../../../utilities/utils";

// COMPOUND COMPONENT CONTEXT
const PanelContext = createContext();
function PanelProvider({ children, panelData }) {
    function formatDataOutput(dataOutput) {
        return pruneString(capitalizeFirst(dataOutput), ["_"]);
    }

    return (
        <PanelContext.Provider value={{ panelData, formatDataOutput }}>
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
                {panelComponents.map((el, index) => {
                    return <ContentSection key={`profile-section-${index}`} >{el}</ContentSection>
                })}
            </div>
        </PanelProvider>
    )
}

// CHILD COMPONENTS
function CharacterPiece({ relevantKeys }) {
    const { panelData, formatDataOutput } = useContext(PanelContext);

    return (
        <div className='panel__piece panel__piece--horizontal'>
            <Avatar character={panelData[relevantKeys[8]]} text={panelData[relevantKeys[0]] + " " + panelData[relevantKeys[1]]} />
            <div className='text-left'>
                {panelData[relevantKeys[2]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[2]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[2]])}</span></p>}
                {panelData[relevantKeys[3]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[3]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[3]])}</span></p>}
                {panelData[relevantKeys[4]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[4]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[4]])}</span></p>}
                {panelData[relevantKeys[5]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[5]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[5]])}</span></p>}
                {panelData[relevantKeys[6]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[6]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[6]])}</span></p>}
                {panelData[relevantKeys[7]] && <p className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-1'><span className='piece__dataIdentifier'>{`${relevantKeys[7]}: `}</span><span className='piece__dataItem'>{formatDataOutput(panelData[relevantKeys[7]])}</span></p>}
            </div>
        </div>
    )
}

function StatsPiece({ relevantKeys, topReferenceValue }) {
    const { panelData } = useContext(PanelContext);

    return (
        <div className='panel__piece'>
            {relevantKeys.map((key) => {
                if (typeof panelData[key] !== 'number') return null;

                return (
                    <div key={key} className='piece__dataWrapper piece__dataWrapper--separation-1'>
                        <StatsBar title={key} value={panelData[key]} topReferenceValue={topReferenceValue} />
                    </div>
                )
            })}
        </div>
    )
}

function StatsBar({ title, value, topReferenceValue }) {
    const bar = useRef();

    useEffect(() => {
        bar.current.style.width = `${(value / topReferenceValue) * 100}%`;
        if (value < topReferenceValue / 3) {
            bar.current.style.backgroundColor = '#f59977';
        }
        if (value < topReferenceValue / 5) {
            bar.current.style.backgroundColor = '#FF4500';
        }
    }, [value, topReferenceValue])
    
    return (
        <>
            <span className='piece__dataIdentifier'>{title}</span>
            <div className='piece__dataItem piece__dataItem--bar' >
                <div ref={bar} className='piece__dataProgress' />
            </div>
        </>
    )
}

function StockpilePiece({ pieceTitle, relevantKey }) {
    const { panelData, formatDataOutput } = useContext(PanelContext);
    let content;

    if (!Array.isArray(panelData[relevantKey])) {
        content = null;
    } else if (!panelData[relevantKey].length) {
        content = <span>⚠️ Empty</span>;
    } else {
        content = panelData[relevantKey].map((el) => {
            return <span key={`stockpile-${el}`} className='piece__dataItem piece__dataItem--piped'>{formatDataOutput(el)}</span>
        });
    }

    return (
        <div className='panel__piece panel__piece--not-centered'>
            <h2 className='piece__title'>{pieceTitle}</h2>
            {content}
        </div>
    )
}

function StockitemPiece({ relevantItem, unit }) {
    const { panelData } = useContext(PanelContext);

    return (
        <div className='panel__piece panel__piece--horizontal'>
            <SvgIcon design={relevantItem} />
            {panelData[relevantItem] <= 10 && <span className='piece__dataItem piece__dataItem--contained piece__dataItem--warning'>{panelData[relevantItem]} {unit}</span>}
            {panelData[relevantItem] <= 0 && <span className='piece__dataItem piece__dataItem--contained piece__dataItem--danger'>{panelData[relevantItem]} {unit}</span>}
            {panelData[relevantItem] > 10 && <span className='piece__dataItem piece__dataItem--contained'>{panelData[relevantItem]} {unit}</span>}
        </div>
    )
}

function HistoryPiece({ pieceTitle }) {
    return (
        <div className='panel__piece panel__piece--not-centered'>
            <h2 className='piece__title'>{pieceTitle}</h2>
        </div>
    )
}

function SettingsPiece({ pieceTitle, relevantKeys, editBtns, authBtns }) {
    const { panelData } = useContext(PanelContext);
    const [pwdVisible, setPwdVisible] = useState(false);

    function handleClick(settingsProp) {
        editBtns.forEach((el) => {
            if (el.name.includes(settingsProp)) el.action();
        });
    }

    function handleView() {
        setPwdVisible((curr => !curr));
    }

    return (
        <div className='panel__piece panel__piece--not-centered'>
            <h2 className='piece__title'>{pieceTitle}</h2>
            <div className='text-left mv-2'>
                {relevantKeys.map((el) => {
                    return (
                        <div key={`settings-${el}`} className='piece__dataWrapper piece__dataWrapper--left piece__dataWrapper--separation-2' >
                            <p className='piece__dataIdentifier'>{el}: </p>
                            <p className='piece__dataItem'>{el === 'password' ? pwdVisible ? panelData[el] : '********' : panelData[el]}</p>
                            <hr></hr>
                            <div className='piece__btnWrapper element--clickable' >
                                <div onClick={() => handleClick(el)}>
                                    <SvgIcon color='#272643' design='edit' />
                                </div>
                                {el === 'password' && <div onClick={() => handleView(el)}><SvgIcon color='#272643' design={pwdVisible ? 'eye-shut' : 'eye'} /></div>}
                            </div>
                        </div>
                    )
                })}
            </div>
            {authBtns.map((el) => {
                return (
                    <div key={`settings-btn-${el.id}`} className='piece__btnWrapper element--clickable'>
                        <Button type={el.name === 'delete account' ? 'danger' : 'secondary'} action={el.action} text={el.name} />
                    </div>
                )
            })}
        </div>
    )
}

ControlPanel.CharacterPiece = CharacterPiece;
ControlPanel.StatsPiece = StatsPiece;
ControlPanel.SettingsPiece = SettingsPiece;
ControlPanel.HistoryPiece = HistoryPiece;
ControlPanel.StockpilePiece = StockpilePiece;
ControlPanel.StockitemPiece = StockitemPiece;

export default ControlPanel;