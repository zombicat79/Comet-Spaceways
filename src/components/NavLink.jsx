function NavLink({ link, resizeTool }) {
    return (
        <li className="navlink" onClick={() => resizeTool()}>
            {link.text}
        </li>
    );
}

export default NavLink;