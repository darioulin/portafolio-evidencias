import React, { Component } from "react";
let logo = "https://files.slack.com/files-pri/TE1NJDVGU-FLM42TQPM/alertair.png";
class Footer extends Component {
  render() {
    return (
      <div className="uk-background-secondary uk-light uk-padding uk-panel">
        <img src={logo} alt="" width="100" height="200" />
        <ul className="uk-grid uk-child-width-1-2@m" uk-grid="">
              <li><p className="uk-h7">
          Made with Love, Peace and Harmony for you. 
        </p></li>
        <li><p className="uk-h7">
          Derechos de autor © 2019 AirAlert S.A.P.I.
        </p></li>
        </ul>
      </div>
    );
  }
}
export default Footer;