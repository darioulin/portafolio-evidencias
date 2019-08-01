import React, { Component } from "react";
let img = 'https://i1.wp.com/www.sopitas.com/wp-content/uploads/2019/05/efectos-contaminacion-salud-cdmx-calidad-aire.jpeg';
class Cover extends Component {
  render() {
    return (
      <div className="uk-cover-container">
        <canvas width="600" height="300" />
        <img src={img} alt="" uk-cover="" />
        <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
          <h3 className="uk-heading">El aire contaminado mata prematuramente a 800 personas cada hora en el planeta
</h3>
        </div>
      </div>
    );
  }
}

export default Cover;