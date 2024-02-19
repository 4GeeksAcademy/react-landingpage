//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Jumbo from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Jumbo />, document.querySelector("#jumbotron"));
const CardsContainer = () => {
    const numberOfCards = 4;
    const cards = [];

    for (let index = 0; index < numberOfCards; index++) {
        cards.push(<Card key={index}/>);
    }

    return <div class="row">{cards}</div>;
};

ReactDOM.render(<CardsContainer />, document.querySelector("#cards_varias"));
