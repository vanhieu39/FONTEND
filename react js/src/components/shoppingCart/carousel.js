import React, { Component } from "react";

class carousel extends Component {
  render() {
    return (
      <div>
        {/* BEGIN CAROUSEL */}
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="{img1}" alt="Los Angeles" width={1100} height={500} />
            </div>
            <div className="carousel-item">
              <img
                src="./img/slide_2.jpg"
                alt="Chicago"
                width={1100}
                height={500}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./img/slide_3.jpg"
                alt="New York"
                width={1100}
                height={500}
              />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
        {/* END CAROUSEL */}
      </div>
    );
  }
}

export default carousel;
