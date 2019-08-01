import React, { Component } from "react";
import Card from './components/Card-Img';

class Lp extends Component {
  render() {
    return (
    <div className="uk-section" id="servicios">
        <div className="uk-container uk-container-large">
          <h3 className="uk-text-bold">Contribuye a generar aire más limpio y agradable para ti y tus seres queridos</h3>
          <Card/>
        </div>
    </div>
    );
  }
}

export default Lp;