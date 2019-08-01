import React, { Component } from "react";
let logos = "https://files.slack.com/files-pri/TE1NJDVGU-FLM42TQPM/alertair.png";
class Navbar extends Component {
  render() {
    return (
      <nav className="uk-navbar-container" uk-sticky="">
        <div className="uk-container uk-container-expand">
          <div className="uk-navbar-left">
            <a className="uk-navbar-toggle" href="#offcanvas-uso" uk-toggle="">
              <span uk-navbar-toggle-icon="" />{" "}
              <span className="uk-margin-small-left">Menú</span>
            </a>
            <div id="offcanvas-uso" uk-offcanvas="">
              <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                <button
                  className="uk-offcanvas-close"
                  type="button"
                  uk-close=""
                />
                <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical">
                  <li className="uk-nav-header">Menú</li>
                  <li>
                    <a href="#servicios">
                      <span
                        className="uk-margin-small-right"
                        uk-icon="icon: cog"
                      />{" "}
                      Registro
                    </a>
                  </li>
                  <li>
                    <a href="#contacto">
                      <span
                        className="uk-margin-small-right"
                        uk-icon="icon: bolt"
                      />{" "}
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-navbar-center">
            <a>
              <img src={logos} alt="" width="80" height="40" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;