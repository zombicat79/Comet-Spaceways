import Tag from "./Tag";

function TagList({ listMembers, linked, actionable, path, queryParams, size }) {
    return (
        <ul className={`tag__list tag__list--${size}`}>
            {listMembers.map((el, index) => {
                return (
                    <li key={index+el} className="tag__element">
                        {linked && !queryParams &&<Tag type="interactive" content={el} link={path} size={size} />}
                        {linked && queryParams && <Tag type="interactive" content={el} link={`${path}?query=${el.toLowerCase()}`} size={size} />}
                        {actionable && <Tag type="interactive" content={el} size={size} />}
                        {!linked && !actionable && <Tag type="dull" content={el} size={size} />}
                    </li>
                )
            })}
        </ul>
    )
}

export default TagList;