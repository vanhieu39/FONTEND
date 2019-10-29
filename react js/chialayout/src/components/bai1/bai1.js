import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
import "./style.css";

class Bai1 extends Component {
  render() {
    return (
      <div id="body">
        <Header />
        <div id="container">
          <div id="con__sidebar">
            <Sidebar />
          </div>
          <div id="con_content">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Bai1;
