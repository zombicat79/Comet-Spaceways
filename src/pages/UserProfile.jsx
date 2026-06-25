import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import ControlPanel from "../components/ui/control-panel/ControlPanel";

function UserProfile() {
    const { activeUser } = useContext(AuthContext);
    const panelComponents = [
        <ControlPanel.CharacterPiece keyId={1} relevantKeys={['name', 'surname', 'race', 'nationality', 'origin', 'build', 'gender', 'job', 'avatar']} />,
        <ControlPanel.StockitemPiece relevantItem='money' unit='AU' />, 
        <ControlPanel.StockpilePiece keyId={2} pieceTitle='inventory' relevantKeys={['inventory']} />, 
        <ControlPanel.StatsPiece keyId={3} relevantKeys={['health', 'strength', 'intelligence', 'wisdom', 'dexterity', 'diplomacy']} topReferenceValue={25} />,
        <ControlPanel.StockpilePiece keyId={4} pieceTitle='skills' relevantKeys={['skills']} />,
        <ControlPanel.HistoryPiece keyId={5} pieceTitle='travel history' relevantKeys={['activeFlight', 'flightHistory']} />,
        <ControlPanel.HistoryPiece keyId={6} pieceTitle='quest history' relevantKeys={['activeQuest', 'questHistory']} />,
        <ControlPanel.HistoryPiece keyId={7} pieceTitle='messages' relevantKeys={['']} />,
        <ControlPanel.SettingsPiece keyId={8} pieceTitle='settings' relevantKeys={['username', 'password', 'email']} />
    ];

    return (
        <main className="profile">
            <ControlPanel distribution='profile' panelComponents={panelComponents} panelData={activeUser} />
        </main>
    )
}



export default UserProfile;