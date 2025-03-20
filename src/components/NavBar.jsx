import NavLink from "./NavLink";

function NavBar({ direction, links }) {
    return (
        <nav className='navbar'>
            <ul className={`navbar__list navbar__list--${direction}`}>
            {links.map((link) => {
                return <NavLink key={link.id} link={link} />
            })}
            </ul>
        </nav>
    );
}

export default NavBar;