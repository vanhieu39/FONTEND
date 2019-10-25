import React, { Component } from "react";

class smartPhoneItem extends Component {
  date = "12/1/2019";
  //loại 1
  //   showName(name) {
  //     alert(name);
  //   }
  //loại 2
  //   showName(name) {
  //     alert(name);
  //   }

  //event binding loai 3:
  //   showDate = () => {
  //     alert(this.date);
  //   };

  state = {
    showDesc: true
  };
  toggleDescription = () => {
    this.setState({
      showDesc: !this.state.showDesc
    });
    console.log(this.state.showDesc);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="card bg-light" style={{ width: 300 }}>
            <img
              className="card-img-top"
              src="./img/sp_iphoneX.png"
              alt="Card image"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">iPhone X</h4>
              <p
                className="card-text"
                style={{
                  color: "pink",
                  lineHeight: "20px",
                  display: this.state.showDesc ? "block" : "none"
                }}
              >
                iPhone X features a new all-screen design. Face ID, which makes
                your face your password
              </p>
              <p>Release date:{this.date}</p>
              {/* event binding loai 1 */}
              {/* <button className="btn btn-primary" onClick={this.showName}>
                Detail
              </button> */}
              {/* event binding loai 2: co tham so dau vao */}
              {/* <button
                className="btn btn-primary"
                onClick={() => this.showName("iphone x binding loai 2")}
              >
                Detail
              </button> */}

              {/* event binding loai 3: co tu khoa this */}
              {/* <button className="btn btn-primary" onClick={this.showDate}>
                Detail
              </button> */}

              <button
                className="btn btn-primary"
                onClick={this.toggleDescription}
              >
                Detail
              </button>

              <button className="btn btn-danger">Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default smartPhoneItem;
