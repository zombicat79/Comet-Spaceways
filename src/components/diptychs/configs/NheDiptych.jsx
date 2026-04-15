import TagList from './../../TagList';

function NheDiptych({ title, mainContent, specifics }) {
    return (
        <>
            <h1 className="diptych__heading">{title.toUpperCase()}</h1>
            <p className="diptych__subheading">Also known as:</p>
            <TagList listMembers={specifics.nicknames} linked={false} actionable={false} size="smallest" />
            <p className="diptych__paragraph">{mainContent}</p>
        </>
    )
}

export default NheDiptych;