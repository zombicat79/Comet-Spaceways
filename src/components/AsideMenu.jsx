import { useMemo } from 'react';

import NavBar from "./NavBar";

function AsideMenu({ links }) {
    const asideAdaptedLinks = useMemo(() => {
        const linksCopy = JSON.parse(JSON.stringify(links));
        for (let key in linksCopy) {
            linksCopy[key].forEach((el) => {
                el.action = 'hint';
            });
        }
        return linksCopy;
    }, [links]);

    return (
        <div className="aside__body">
            <div className="aside__main">
                <NavBar 
                    direction='vertical'
                    links={asideAdaptedLinks.topLeft}
                />
                <NavBar 
                    direction='vertical'
                    links={asideAdaptedLinks.topRight.slice(0, 2)}
                />
            </div>
            <div className="aside__lesser">
                <NavBar 
                    direction='vertical'
                    links={asideAdaptedLinks.bottomLeft}
                />
                <NavBar 
                    direction='vertical'
                    links={asideAdaptedLinks.bottomRight}
                />
            </div>

            <img className='aside__badge' src="./../../public/logos/ctsw-logo_dark_badge.png" alt='Comet Spaceways badge' />
            <blockquote className="aside__motto">Go conquer the universe</blockquote>
        </div>
    )
}

export default AsideMenu;