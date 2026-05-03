import { Link } from 'react-router';

function Tag({ type, content, link, color, size, shape }) {
    if (link) {
        return (
            <Link to={link}>
                <div className={`tag tag--${type} tag--${color} tag--${size} tag--${shape}`}>
                    <h6 className="tag__content">{content}</h6>
                </div>
            </Link>
        )
    }
    
    return (
        <div className={`tag tag--${type} tag--${color} tag--${size} tag--${shape}`}>
            <h6 className="tag__content">{content}</h6>
        </div>
    )
}

export default Tag;