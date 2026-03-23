import profileDefault from '/assets/images/icos/profile-default.png';

function Avatar({ character, link=null, text=null, layout='vertical'}) {
    const img = profileDefault;

    return (
        <figure className={`avatar avatar--${layout}`}>
            {link
                ? <a className={`avatar__img-wrapper avatar__img-wrapper--${character}`} href={link} target="_blank" />
                : <div className={`avatar__img-wrapper avatar__img-wrapper--${character}`} />
            }
            {text && <p className={`avatar__text`}>{text}</p>}
        </figure>
    )
}

export default Avatar;