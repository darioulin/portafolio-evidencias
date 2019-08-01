import React, { Component } from "react";
let img ="https://ciberpsicologos.com/wp-content/uploads/2016/08/familia-feliz-750x350.jpg";
let registro = 'https://docs.google.com/forms/d/e/1FAIpQLSdue3f-KcvwYFGxEzuPHMbXWr4Y1gnez_R9oCG1Ri1fg_1ypA/viewform?usp=sf_link';

class Card extends Component {
  render() {
    return (
      <div className="uk-margin">
        
        <ul className="uk-grid uk-child-width-1-3@m" uk-grid="">
              <li></li>
              <li>
              <div className="uk-card uk-card-medium uk-card-default">
          <div className="uk-cover-container">
            <img src={img} alt="" />
          </div>
          <div className="uk-card-body uk-card-hover">
            <p className="uk-card-text uk-text-justify">Te mandamos una alerta antes de llegar al límite del índice permitido de la calidad de aire y te recomendamos acciones concretas para reducir menos Co2, de lo contrario se aplicará un “no Circula”</p>
            
            <p uk-margin>
            <a className="uk-button uk-button-default uk-button-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdue3f-KcvwYFGxEzuPHMbXWr4Y1gnez_R9oCG1Ri1fg_1ypA/viewform?usp=sf_link">Registrarse</a>
        </p>
          </div>
          </div>
          </li>
            <li></li>
            </ul>
        
      </div>
    );
  }
}

export default Card;