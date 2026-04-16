import Tag from "./Tag";

function TagList({ listMembers, linked, actionable, path, queryParams, color, size, shape }) {
    const colorCheck = color ? color : 'blue';
    const shapeCheck = shape ? shape : 'round';
    
    return (
        <ul className={`tag__list tag__list--${size}`}>
            {listMembers.map((el, index) => {
                return (
                    <li key={index+el} className="tag__element">
                        {linked && !queryParams &&<Tag type="interactive" content={el} link={path} color={colorCheck} size={size} shape={shapeCheck} />}
                        {linked && queryParams && <Tag type="interactive" content={el} link={`${path}?query=${el.toLowerCase()}`} color={colorCheck} size={size} shape={shapeCheck} />}
                        {actionable && <Tag type="interactive" content={el} color={colorCheck} size={size} shape={shapeCheck} />}
                        {!linked && !actionable && <Tag type="dull" content={el} color={colorCheck} size={size} shape={shapeCheck} />}
                    </li>
                )
            })}
        </ul>
    )
}

export default TagList;