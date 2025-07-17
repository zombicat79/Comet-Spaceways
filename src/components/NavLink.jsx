import { useState } from 'react';
import { Link } from 'react-router';

function NavLink({ link, decoration, tooling }) {
    const [hint, setHint] = useState(false)
    
    function handleTooling() {
        switch(link.action) {
            case 'expand':
                tooling.handleResizing();
                break;
            case 'popup':
                tooling.handlePopupLaunch({ modalClass: 'generic', content: link.payload });
                break;
            case 'hint':
                setHint((curr) => !curr);
                setTimeout(() => setHint(false), 3000);
                break;
            default:
                return;
        }
    }

    if (link.action === 'link') {
        return (
            <li 
                className={link.decoration ? `navlink navlink--${link.decoration}` : 'navlink'} 
            >
                <Link to="/not-found" className="navlink__text">{link.text}</Link>
            </li>
        );
    }
    
    return (
        <li 
            className={link.decoration ? `navlink navlink--${link.decoration}` : 'navlink'} 
            onClick={() => handleTooling()}
        >
            <span className="navlink__text">{link.text}</span>
            {hint && <span className="navlink__infospan"></span>}
        </li>
    );
}

export default NavLink;