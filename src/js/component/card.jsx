
import React from "react";
import logo from "../../img/4geeksacademyes_logo.jpg";
const Cards = () => {




    return (
        <div className="card col-3 card-containers">
            <img src={logo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>



            </div>
            <hr className="linea_boton"/>
            <div className="final_boton">
                
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );
};

export default Cards;