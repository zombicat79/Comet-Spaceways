import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { LayoutContext } from '../../contexts/LayoutContext'; // TEMPORARY -- REMOVE AFTER ADDING ACTUAL CONTENT TO THE PAGE
import { FlightSearchContext } from '../../contexts/FlightSearchContext';
import { CartContext } from '../../contexts/CartContext';

import PageRibbon from '../../components/PageRibbon';
import Button from '../../components/Button';
import WorkInProgress from '../../components/modalpieces/WorkInProgress';

function Allocation() {
    const { handlePopupLaunch } = useContext(LayoutContext); // TEMPORARY -- REMOVE AFTER ADDING ACTUAL CONTENT TO THE PAGE
    const { flightSearchState } = useContext(FlightSearchContext);
    const { cartState } = useContext(CartContext);
    const navigate = useNavigate();

    // TEMPORARY -- REMOVE AFTER ADDING ACTUAL CONTENT TO THE PAGE
    useEffect(() => {
        handlePopupLaunch({content: WorkInProgress()});
    }, [])

    return (
        <main className="allocation">

            {/*<PageRibbon>
                <Button type="primary" action={() => navigate("/")} text="proceed with purchase 🚀" isDisabled={true} />
            </PageRibbon> */}

            <PageRibbon>
                <Button type="primary" action={() => navigate("/")} text="go back" isDisabled={false} />
            </PageRibbon>
        </main>
    )
}

export default Allocation;