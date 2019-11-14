import React, { Component } from "react";

class InitializeTask extends Component {
  InitializeTask = () => {
    this.props.generateData();
  };
  render() {
    return (
      <button
        type="button"
        className="btn btn--intializeTask"
        onClick={this.InitializeTask}
      >
        <i className="fa fa-pencil-square-o" />
        Lấy dữ liệu từ LocalStorage
      </button>
    );
  }
}

export default InitializeTask;
