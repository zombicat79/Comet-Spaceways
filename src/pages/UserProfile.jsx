import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

import ControlPanel from "../components/ui/control-panel/ControlPanel";

function UserProfile() {
    const { setIsAuth, activeUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const settingsUtils = [
        {
            id: 1,
            name: 'log out',
            action: () => {
                setIsAuth(false);
                navigate("/godspeed");
            }
        }
    ]
    const panelComponents = [
        <ControlPanel.CharacterPiece keyId={1} relevantKeys={['name', 'surname', 'race', 'nationality', 'origin', 'build', 'gender', 'job', 'avatar']} />,
        <ControlPanel.StockitemPiece relevantItem='money' unit='AU' />, 
        <ControlPanel.StockpilePiece keyId={2} pieceTitle='inventory' relevantKey={'inventory'} />, 
        <ControlPanel.StatsPiece keyId={3} relevantKeys={['health', 'strength', 'intelligence', 'wisdom', 'dexterity', 'diplomacy']} topReferenceValue={25} />,
        <ControlPanel.StockpilePiece keyId={4} pieceTitle='skills' relevantKey={'skills'} />,
        <ControlPanel.HistoryPiece keyId={5} pieceTitle='travel history' relevantKeys={['activeFlight', 'flightHistory']} />,
        <ControlPanel.HistoryPiece keyId={6} pieceTitle='quest history' relevantKeys={['activeQuest', 'questHistory']} />,
        <ControlPanel.HistoryPiece keyId={7} pieceTitle='messages' relevantKeys={['']} />,
        <ControlPanel.SettingsPiece keyId={8} pieceTitle='settings' relevantKeys={['username', 'password', 'email']} utilityBtns={settingsUtils} />
    ];

    return (
        <main className="profile">
            <ControlPanel distribution='profile' panelComponents={panelComponents} panelData={activeUser} />
        </main>
    )
}



export default UserProfile;