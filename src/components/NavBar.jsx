import NavLink from "./NavLink";

function NavBar({ direction, links, resizeTool }) {
    return (
        <nav className='navbar'>
            <ul className={`navbar__list navbar__list--${direction}`}>
            {links.map((link) => {
                if (link.action === 'expand') {
                    return <NavLink key={link.id} link={link} resizeTool={resizeTool} />
                } else {
                    return <NavLink key={link.id} link={link} />
                }
            })}
            </ul>
        </nav>
    );
}

export default NavBar;