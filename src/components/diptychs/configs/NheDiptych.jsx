import { useContext } from 'react';
import { LayoutContext } from '../../../contexts/LayoutContext';

import TagList from './../../TagList';
import SvgIcon from '../../SvgIcon';

function NheDiptych({ title, mainContent, specifics }) {
    const { handlePopupLaunch } = useContext(LayoutContext);

    return (
        <>
            <h1 className="diptych__heading">{title.toUpperCase()}</h1>
            <p className="diptych__paragraph italic">Also known as:</p>
            <TagList listMembers={specifics.nicknames} linked={false} actionable={false} size="smallest" />
            <p className="diptych__paragraph">{mainContent}</p>
            <div className="diptych__section">
                <h2 className="diptych__subheading">Taxonomic description:</h2>
                <div className="diptych__iconset">
                    <div onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'PHYSICAL FEATURES', list: specifics.physical_features, alignment: 'left'} })}>
                        <SvgIcon design="body" color="#F5F5F5" />
                    </div>
                    <div onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'INTELLECTUAL FEATURES', list: specifics.intellectual_features, alignment: 'left'} })}>
                        <SvgIcon design="brain" color="#F5F5F5" />
                    </div>
                    <div onClick={() => handlePopupLaunch({ modalClass: 'presentational', content: 'info-list', props: {title: 'SOCIAL FEATURES', list: specifics.social_features, alignment: 'left'} })}>
                        <SvgIcon design="congress" color="#F5F5F5" />
                    </div>
                </div>
            </div>
            <h2 className="diptych__subheading">Practical features:</h2>
            <h2 className="diptych__subheading">Legal status:</h2>
            <p className="diptych__paragraph">
                Eligible for a <span className="highlight">{specifics.permission_type}-type Spacepasses</span> at consulates in the following destinations: 
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
        </>
    )
}

export default NheDiptych;