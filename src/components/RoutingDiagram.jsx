import SvgIcon from "./SvgIcon";

function RoutingDiagram() {
    return (
        <div className="routing__diagram">
            <hr className="routing__line"></hr>
            <div className="routing__endpoint routing__endpoint--left"></div>
            <div className="routing__arrow">
                <SvgIcon design="starship" color="#0B3D91" />
            </div>
            <div className="routing__endpoint routing__endpoint--right"></div>
        </div>
    )
}

export default RoutingDiagram;