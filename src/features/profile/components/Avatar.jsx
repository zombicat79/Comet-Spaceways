import { Link } from 'react-router';

function Avatar({ character, link=null, text=null, layout='vertical'}) {
    return (
        <figure className={`avatar avatar--${layout}`}>
            {link
                ? <Link className={`avatar__img-wrapper avatar__img-wrapper--${character}`} to={link} />
                : <div className={`avatar__img-wrapper avatar__img-wrapper--${character}`} />
            }
            {text && <p className={`avatar__text`}>{text}</p>}
        </figure>
    )
}

export default Avatar;