import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Smartphone from "./smartPhone";
import Laptop from "./laptop";
import Footer from "./footer";
class layout extends Component {
  render() {
    return (
      <div class="bg-dark">
        <Header />
        <Carousel />
        <Smartphone />
        <Laptop />
        <Footer />
      </div>
    );
  }
}

export default layout;
