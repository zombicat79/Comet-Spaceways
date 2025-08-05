import SvgIcon from "../SvgIcon";

function ConnectionDetails({ routingDetails }) {
    return (
      <main className="infopiece">
        <article className="infopiece__content infopiece__routing">
          <div className="infopiece__segment connection">
            <div className="connection__header">
              <img className="connection__operator" src='/logos/ctsw-logo_light_badge.svg' alt="Comet Spaceways badge" />
              <p className="connection__flight">Comet CS2225</p>
            </div>
            <div className="connection__body">
              <p className="connection__endpoint">
                <span className="connection__date">21/02/2125</span>
                <span className="connection__time">12:32h</span>
                <span className="connection__port">EEU Earth (Europe)</span>
              </p>
              <figure className="connection__figure">
                <SvgIcon design="time" color="#F5F5F5" />
                <span className="connection__duration">3h 23m</span>
              </figure>
              <figure className="connection__figure">
                <SvgIcon design="starship" color="#F5F5F5" />
                <span className="connection__vessel">Shooting Star X-35</span>
              </figure>
              <p className="connection__endpoint">
                <span className="connection__date">21/02/2125</span>
                <span className="connection__time">15:55h</span>
                <span className="connection__port">LUN Moon</span>
              </p>

              <div className="connection__bullet connection__bullet--top"></div>
              <div className="connection__bullet connection__bullet--bottom"></div>
            </div>
          </div>
          <div className="connection__interlude">
            <p>8h interlude at the spaceport</p>
          </div>
          <div className="infopiece__segment connection">
            <figure className="connection__header">
              <img className="connection__operator" src='/logos/ctsw-logo_light_badge.svg' alt="Comet Spaceways badge" />
              <p className="connection__flight">Comet CS6348</p>
            </figure>
            <div className="connection__body">
              <p className="connection__endpoint">
                <span className="connection__date">22/02/2125</span>
                <span className="connection__time">02:15h</span>
                <span className="connection__port">LUN Moon</span>
              </p>
              <figure className="connection__figure">
                <SvgIcon design="time" color="#F5F5F5" />
                <span className="connection__duration">1 month 6h 15m</span>
              </figure>
              <figure className="connection__figure">
                <SvgIcon design="starship" color="#F5F5F5" />
                <span className="connection__vessel">Galaxy Jumbo 400</span>
              </figure>
              <p className="connection__endpoint">
                <span className="connection__date">22/03/2125</span>
                <span className="connection__time">08:30h</span>
                <span className="connection__port">MRS Mars</span>
              </p>

              <div className="connection__bullet connection__bullet--top"></div>
              <div className="connection__bullet connection__bullet--bottom"></div>
            </div>
          </div>

          <h3 className="connection__summary">ARRIVES: sat., 22 mar 2125<br/>VOYAGE TIME: 30days 19h 35m</h3>
        </article>
      </main>
    );
}

export default ConnectionDetails;