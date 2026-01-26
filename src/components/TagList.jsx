import Tag from "./Tag";

function TagList({ listMembers }) {
    return (
        <ul className="tag__list">
            {listMembers.map((el, index) => {
                return (
                    <li key={index+el} className="tag__element">
                        <Tag content={el} link={`/destinations?query=${el.toLowerCase()}`} size="smaller" />
                    </li>
                )
            })}
        </ul>
    )
}

export default TagList;