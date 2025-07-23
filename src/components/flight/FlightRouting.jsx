import SvgIcon from "../SvgIcon";

function FlightRouting() {
    return (
        <div className="routing">
            <div className="routing__schema">
                <div className="routing__coords">
                    <span className="routing__date">23/08/2125</span>
                    <span className="routing__time">08:35</span>
                    <span className="routing__port">Moon</span>
                </div>
                <div className="routing__figure">
                    <span className="routing__flight">CS4552</span>
                    <div className="routing__diagram">
                        <hr className="routing__line"></hr>
                        <div className="routing__endpoint routing__endpoint--left"></div>
                        <div className="routing__arrow">
                            <SvgIcon design="starship" />
                        </div>
                        <div className="routing__endpoint routing__endpoint--right"></div>
                    </div>
                    <span className="routing__duration">1 month</span>
                </div>
                <div className="routing__coords">
                    <span className="routing__date">23/09/2125</span>
                    <span className="routing__time">14:56</span>
                    <span className="routing__port">Mars</span>
                </div>
            </div>
            <span className="routing__mode">Direct</span>
        </div>
    )
}

export default FlightRouting;