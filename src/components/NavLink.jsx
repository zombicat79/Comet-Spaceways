function NavLink({ link, decoration, tooling }) {
    function handleTooling() {
        switch(link.action) {
            case 'expand':
                tooling.handleResizing();
                break;
            case 'popup':
                tooling.handlePopupLaunch({ modalClass: 'generic', content: link.payload, width: 'regular', height: 'regular' });
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