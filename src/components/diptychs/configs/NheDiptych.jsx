import { useState, useContext } from 'react';
import { LayoutContext } from '../../../contexts/LayoutContext';

import SvgIcon from '../../SvgIcon';
import TagList from './../../TagList';
import Tooltip from './../../Tooltip';

function NheDiptych({ title, mainContent, specifics }) {
    const { layoutState, handlePopupLaunch } = useContext(LayoutContext);
    const [activeTooltip, setActiveTooltip] = useState("");
    const sectionAlignment = layoutState.viewportWidth >= 600 ? 'horizontal' : 'vertical';

    const statsContent = (<>
        <ul>
            <li>{`Admired for their ${specifics.strengths.join(' and ')}`}</li>
            <li>{`Mocked for their insufficient ${specifics.weaknesses.join(' and ')}`}</li>
            <li>{`Extraordinary at ${specifics.abilities.join(' and ')}`}</li>
        </ul>
    </>)
    const toolsContent = <p>{`Good at ${specifics.jobs.join(' and ')}`}</p>;
    const agreeContent = (<>                             
        {specifics.bosses.length === 0 && specifics.vassals.length === 0 && specifics.friends.length === 0 && specifics.enemies.length === 0
        ? 
        <>
            <p>Status unkown</p>
            <p>Typically {specifics.alignment}</p>
        </>
        : 
        <>
            <p>Typically {specifics.alignment}</p>
            <ul>
                {specifics.bosses.length > 0 && <li>{`Subjugated to ${specifics.bosses.join(" and ")}`}</li>}
                {specifics.vassals.length > 0 && <li>{`Rulers of ${specifics.vassals.join(" and ")}`}</li>}
                {specifics.friends.length > 0 && <li>{`Allies of ${specifics.friends.join(" and ")}`}</li>}
                {specifics.enemies.length > 0 && <li>{`Hostile to ${specifics.enemies.join(" and ")}`}</li>}
                {(specifics.bosses.length === 0) && (specifics.vassals.length === 0) && (specifics.friends.length === 0) && (specifics.enemies.length === 0) && <li>Status unkown</li>}
            </ul>
        </>}
    </>)
    const speechContent = (<>
        {specifics.languages.length === 0
        ? <p>No language system</p>
        : <ul>
            {specifics.languages.map((lang) => {
                return <li key={lang.name}>{lang.name} ({lang.type})</li>
            })}
        </ul>}
    </>)
    
    function handleTooltips(tooltipName) {
        setActiveTooltip(tooltipName);
    }

    return (
        <>
            {layoutState.viewportWidth >= 1000 && <h1 className="diptych__heading">{title.toUpperCase()}</h1>}
            <p className="diptych__paragraph italic">Also known as:</p>
            <TagList listMembers={specifics.nicknames} linked={false} actionable={false} size="smallest" />
            <p className="diptych__paragraph">{mainContent}</p>
            <p className="diptych__paragraph">Their believed origins trace back to {specifics.origins.join(" and ")}</p>
            <div className={`diptych__section--${sectionAlignment}`}>
                <h2 className="diptych__subheading">Taxonomic description:</h2>
                <div className="diptych__iconset element--clickable">
                    <div className="diptych__iconwrap" onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'PHYSICAL FEATURES', list: specifics.physical_features, alignment: 'left'} })}>
                        <SvgIcon design="body" color="#F5F5F5" />
                    </div>
                    <div className="diptych__iconwrap" onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'INTELLECTUAL FEATURES', list: specifics.intellectual_features, alignment: 'left'} })}>
                        <SvgIcon design="brain" color="#F5F5F5" />
                    </div>
                    <div className="diptych__iconwrap" onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'SOCIAL FEATURES', list: specifics.social_features, alignment: 'left'} })}>
                        <SvgIcon design="congress" color="#F5F5F5" />
                    </div>
                </div>
            </div>
            <div className={`diptych__section--${sectionAlignment}`}>
                <h2 className="diptych__subheading">Practical features:</h2>
                <div className="diptych__iconset element--observable" onMouseOut={() => handleTooltips('')}>
                    <div className="diptych__iconwrap" 
                        onMouseOver={layoutState.viewportWidth >= 600 ? () => handleTooltips('stats') : null}
                        onClick={layoutState.viewportWidth < 600 ? () => handlePopupLaunch({ modalClass: 'presentational', content: 'generic', props: {title: 'TRAITS & ABILITIES', body: statsContent, alignment: 'left'} }) : null}
                    >
                        <SvgIcon design="stats" color="#F5F5F5" />
                        {activeTooltip === "stats" && <Tooltip 
                            title="Traits & abilities"
                            body={statsContent}
                        />}
                    </div>
                    <div className="diptych__iconwrap"
                        onMouseOver={layoutState.viewportWidth >= 600 ? () => handleTooltips('tools') : null}
                        onClick={layoutState.viewportWidth < 600 ? () => handlePopupLaunch({ modalClass: 'presentational', content: 'generic', props: {title: 'EXPERTISE AREAS', body: toolsContent, alignment: 'left'} }) : null}
                    >
                        <SvgIcon design="tools" color="#F5F5F5" />
                        {activeTooltip === "tools" && <Tooltip 
                            title="Expertise areas"
                            body={toolsContent}
                         />}
                    </div>
                    <div className="diptych__iconwrap" 
                        onMouseOver={layoutState.viewportWidth >= 600 ? () => handleTooltips('agree') : null}
                        onClick={layoutState.viewportWidth < 600 ? () => handlePopupLaunch({ modalClass: 'presentational', content: 'generic', props: {title: 'DIPLOMATIC RELATIONS', body: agreeContent, alignment: 'left'} }) : null}
                    >
                        <SvgIcon design="agree" color="#F5F5F5" />
                        {activeTooltip === "agree" && <Tooltip 
                            title="Diplomatic relations"
                            body={agreeContent}
                        />}
                    </div>
                    <div className="diptych__iconwrap" 
                        onMouseOver={layoutState.viewportWidth >= 600 ? () => handleTooltips('speech') : null}
                        onClick={layoutState.viewportWidth < 600 ? () => handlePopupLaunch({ modalClass: 'presentational', content: 'generic', props: {title: 'LANGUAGES', body: speechContent, alignment: 'left'} }) : null}
                    >
                        <SvgIcon design="speech" color="#F5F5F5" />
                        {activeTooltip === "speech" && <Tooltip 
                            title="Languages"
                            body={speechContent}
                        />}
                    </div>
                </div>
            </div>
            <div className="diptych__section--vertical">
                <h2 className="diptych__subheading">Legal status:</h2>
                <p className="diptych__paragraph">
                    Eligible for <span className="highlight">{specifics.permission_type}-type Spacepasses</span> at selected consulates in the following destinations: 
                </p>
                <TagList 
                    listMembers={specifics.consulates} 
                    linked={true} 
                    path="/destinations"
                    queryParams={true} 
                    actionable={false}
                    color="green" 
                    size="smallest"
                    shape="square"
                />
            </div>
        </>
    )
}

export default NheDiptych;