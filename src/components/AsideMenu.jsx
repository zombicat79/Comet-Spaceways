import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

function AsideMenu({ links }) {
    return (
        <div className="aside__body">
            <div className="aside__main">
                <NavBar 
                    direction='vertical'
                    links={links.topLeft}
                />
                <NavBar 
                    direction='vertical'
                    links={links.topRight.slice(0, 2)}
                />
            </div>
            <div className="aside__lesser">
                <NavBar 
                    direction='vertical'
                    links={links.bottomLeft}
                />
                <NavBar 
                    direction='vertical'
                    links={links.bottomRight}
                />
            </div>

            <img className='aside__badge' src="./../../public/logos/ctsw-logo_dark_badge.png" alt='Comet Spaceways badge' />
            <blockquote className="aside__motto">Go conquer the universe</blockquote>
        </div>
    )
}

export default AsideMenu;