import { Link } from 'react-router';

function Tag({ content, link, color, size }) {
    return (
        <Link to={link}>
            <div className={`tag tag--${color} tag--${size}`}>
                <h6 className="tag__content">{content}</h6>
            </div>
        </Link>
    )
}

export default Tag;