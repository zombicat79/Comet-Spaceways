import NavLink from "./NavLink";

function NavBar({ direction, links, decoration, tooling }) {
    return (
        <nav className='navbar'>
            <ul className={`navbar__list navbar__list--${direction}`}>
            {links.map((link) => {
                return <NavLink 
                    key={link.id} 
                    link={link} 
                    decoration={decoration} 
                    tooling={tooling}
                />
            })}
            </ul>
        </nav>
    );
}

export default NavBar;