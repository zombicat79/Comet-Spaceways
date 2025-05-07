function NavLink({ link, decoration, tooling }) {

    console.log(link.id, tooling)

    function handleTooling() {
        switch(link.action) {
            case 'expand':
                tooling.handleResizing();
                break;
            case 'popup':
                tooling.handlePopupLaunch(link.payload);
                break;
            default:
                return;
        }
    }
    
    return (
        <li 
            className={link.decoration ? `navlink navlink--${link.decoration}` : 'navlink'} 
            onClick={() => handleTooling()}
        >
            {link.text}
        </li>
    );
}

export default NavLink;