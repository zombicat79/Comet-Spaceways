import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { LayoutContext } from "../contexts/LayoutContext";

import ControlPanel from "../components/ui/control-panel/ControlPanel";

function UserProfile() {
    const { setIsAuth, activeUser } = useContext(AuthContext);
    const { handlePopupLaunch } = useContext(LayoutContext);
    const navigate = useNavigate();
    
    const settingsUtils = {
        auth: [
            {
                id: 1,
                name: 'log out',
                action: () => {
                    navigate("/logged-out");
                    setTimeout(() => setIsAuth(false), 3000);
                }
            },
            {
                id: 2,
                name: 'delete account',
                action: () => {
                    handlePopupLaunch({ modalClass: 'large', content: 'work-in-progress' });
                }
            }
        ],
        edit: [
            {
                id: 3,
                name: 'edit username',
                action: () => {
                    handlePopupLaunch({ modalClass: 'regular', content: 'account-edit', props: { targetAccountProp: 'username', currentValue: activeUser.username }});
                }
            },
            {
                id: 4,
                name: 'edit password',
                action: () => {
                    handlePopupLaunch({ modalClass: 'large', content: 'work-in-progress' });
                }
            },
            {
                id: 5,
                name: 'edit email',
                action: () => {
                    handlePopupLaunch({ modalClass: 'large', content: 'work-in-progress' });
                }
            }
        ]
    };
    
    const panelComponents = [
        <ControlPanel.CharacterPiece relevantKeys={['name', 'surname', 'race', 'nationality', 'origin', 'build', 'gender', 'job', 'avatar']} />,
        <ControlPanel.StockitemPiece relevantItem='money' unit='AU' />, 
        <ControlPanel.StockpilePiece pieceTitle='inventory' relevantKey={'inventory'} />, 
        <ControlPanel.StatsPiece relevantKeys={['health', 'strength', 'intelligence', 'wisdom', 'dexterity', 'diplomacy']} topReferenceValue={25} />,
        <ControlPanel.StockpilePiece pieceTitle='skills' relevantKey={'skills'} />,
        <ControlPanel.HistoryPiece pieceTitle='travel history' relevantKeys={['activeFlight', 'flightHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='quest history' relevantKeys={['activeQuest', 'questHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='messages' relevantKeys={['']} />,
        <ControlPanel.SettingsPiece pieceTitle='settings' relevantKeys={['username', 'password', 'email']} editBtns={settingsUtils.edit} authBtns={settingsUtils.auth} />
    ];

    return (
        <main className="profile">
            <ControlPanel distribution='profile' panelComponents={panelComponents} panelData={activeUser} />
        </main>
    )
}



export default UserProfile;