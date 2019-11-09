import React, { Component } from "react";
import AddNewTask from "./Controls/AddNewTask";
import InitializeTask from "./Controls/InitializeTask";
import FilterProgress from "./Controls/FilterProgress";
import FilterPriority from "./Controls/FilterPriority";
import Sort from "./Controls/Sort";
import FilterLabel from "./Controls/FilterLabel";

class Controls extends Component {
  render() {
    return (
      <div className="col-md-3 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="user" />
          <h3 className="text-white d-inline font-weight-light ml-2">
            Lê Quang Song
          </h3>
        </div>
        {/* Add new Tassk */}
        <AddNewTask clearBeforeAddNewTask={this.props.clearBeforeAddNewTask} />
        {/* lấy dữ liệu từ localstorage. */}
        <InitializeTask generateData={this.props.generateData} />
        {/* Filter */}
        <div className="px-3">
          {/* filter progress */}
          <FilterProgress
            changeFilterProgress={this.props.changeFilterProgress}
          />
          {/* Filter label */}
          <FilterLabel />
          {/* Filter Prioritize */}
          <FilterPriority />

          {/* sort */}
          <Sort changeSortType={this.props.changeSortType} />
        </div>
      </div>
    );
  }
}

export default Controls;
