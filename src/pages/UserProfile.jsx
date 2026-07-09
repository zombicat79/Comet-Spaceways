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
                navigate("/logged-out");
                setTimeout(() => setIsAuth(false), 3000);
            }
        }
    ]
    const panelComponents = [
        <ControlPanel.CharacterPiece relevantKeys={['name', 'surname', 'race', 'nationality', 'origin', 'build', 'gender', 'job', 'avatar']} />,
        <ControlPanel.StockitemPiece relevantItem='money' unit='AU' />, 
        <ControlPanel.StockpilePiece pieceTitle='inventory' relevantKey={'inventory'} />, 
        <ControlPanel.StatsPiece relevantKeys={['health', 'strength', 'intelligence', 'wisdom', 'dexterity', 'diplomacy']} topReferenceValue={25} />,
        <ControlPanel.StockpilePiece pieceTitle='skills' relevantKey={'skills'} />,
        <ControlPanel.HistoryPiece pieceTitle='travel history' relevantKeys={['activeFlight', 'flightHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='quest history' relevantKeys={['activeQuest', 'questHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='messages' relevantKeys={['']} />,
        <ControlPanel.SettingsPiece pieceTitle='settings' relevantKeys={['username', 'password', 'email']} utilityBtns={settingsUtils} />
    ];

    return (
        <main className="profile">
            <ControlPanel distribution='profile' panelComponents={panelComponents} panelData={activeUser} />
        </main>
    )
}



export default UserProfile;