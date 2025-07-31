function ConnectionDetails({ routingDetails }) {
    return (
      <main className="infopiece">
        <article className="infopiece__content infopiece__routing">
          <div className="infopiece__segment connection">
            <div className="connection__header">
              <img className="connection__operator" src='/logos/ctsw-logo_light_badge.svg' alt="Comet Spaceways badge" />
              <p className="connection__flight">Comet CS6348</p>
            </div>
            <div className="connection__body">
              <p className="connection__endpoint">
                <span>21/02/2125</span>
                <span>12:32</span>
                <span>Earth (Europe)</span>
              </p>
              <span className="connection__duration"></span>
              <span className="connection__vessel"></span>
              <p className="connection__endpoint">
                <span></span>
                <span></span>
                <span>LUN Moon</span>
              </p>

              <div className="connection__bullet connection__bullet--top"></div>
              <div className="connection__bullet connection__bullet--bottom"></div>
            </div>
          </div>
          <div className="connection__interlude">
            <p>8h interlude at the spaceport</p>
          </div>
          <div className="infopiece__segment connection">
            <div className="connection__header">
              <img className="connection__operator" src='/logos/ctsw-logo_light_badge.svg' alt="Comet Spaceways badge" />
              <p className="connection__flight">Comet CS6347</p>
            </div>
            <div className="connection__body">
              <p className="connection__endpoint">
                <span></span>
                <span></span>
                <span></span>
              </p>
              <span className="connection__duration"></span>
              <span className="connection__vessel"></span>
              <p className="connection__endpoint">
                <span></span>
                <span></span>
                <span></span>
              </p>

              <div className="connection__bullet connection__bullet--top"></div>
              <div className="connection__bullet connection__bullet--bottom"></div>
            </div>
          </div>
        </article>
      </main>
    );
}

export default ConnectionDetails;