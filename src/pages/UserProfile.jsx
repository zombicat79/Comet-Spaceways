import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import ControlPanel from "../components/ui/control-panel/ControlPanel";

function UserProfile() {
    const { activeUser } = useContext(AuthContext);
    console.log(activeUser)
    const panelComponents = [
        <ControlPanel.CharacterPiece relevantKeys={['name', 'surname', 'race', 'nationality', 'origin', 'build', 'gender', 'job', 'avatar']} />, 
        <ControlPanel.StockPiece pieceTitle='Inventory' relevantKeys={['inventory']} />, 
        <ControlPanel.StatsPiece relevantKeys={['health', 'strength', 'intelligence', 'wisdom', 'dexterity', 'diplomacy']} />,
        <ControlPanel.StockPiece pieceTitle='Skills' relevantKeys={['skills']} />,
        <ControlPanel.HistoryPiece pieceTitle='travel history' relevantKeys={['activeFlight', 'flightHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='Skills' relevantKeys={['activeQuest', 'questHistory']} />,
        <ControlPanel.HistoryPiece pieceTitle='message board' relevantKeys={['']} />,
        <ControlPanel.SettingsPiece relevantKeys={['username', 'password', 'email']} />
    ];

    return (
        <main className="profile">
            <ControlPanel distribution='profile' panelComponents={panelComponents} panelData={activeUser} />
        </main>
    )
}



export default UserProfile;