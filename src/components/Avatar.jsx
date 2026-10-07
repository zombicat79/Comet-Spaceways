import { Link } from 'react-router';

function Avatar({ character, link=null, onClick=null, text=null, layout='vertical'}) {
    return (
        <figure className={`avatar avatar--${layout}`}>
            {link
                ? <Link className={`avatar__img-wrapper avatar__img-wrapper--${character}`} to={link} />
                : <div className={`avatar__img-wrapper avatar__img-wrapper--${character}`} onClick={onClick ? () => onClick() : null} />
            }
            {text && <h4 className={`avatar__text`}>{text}</h4>}
        </figure>
    )
}

export default Avatar;