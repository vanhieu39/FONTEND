import React, { Component } from "react";
import ItemSmartPhone from "./smartPhoneItem";

class smartPhone extends Component {
  render() {
    return (
      <div>
        {/* BEGIN SMARTPHONE */}
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ItemSmartPhone />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ItemSmartPhone />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ItemSmartPhone />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <ItemSmartPhone />
            </div>
          </div>
        </section>

        {/* END SMARTPHONE */}
      </div>
    );
  }
}

export default smartPhone;
