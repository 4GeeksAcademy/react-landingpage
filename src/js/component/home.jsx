import React from "react";

//create your first component
const Home = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="col-2"></div>
      <div className="col-4"><a class="navbar-brand" href="#">Start Bootstrap</a></div>
      
      <div className="col-2"></div>
      <div class="collapse navbar-collapse col-4" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>

      </div>
    </nav>



  );
};



export default Home;
