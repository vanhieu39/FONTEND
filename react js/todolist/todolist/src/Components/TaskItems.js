import React, { Component } from "react";
import THead from "./TaskItems/THead";
import Item from "./TaskItems/Item";
import Search from "./TaskItems/Search";

class TaskItems extends Component {
  render() {
    let { tasks, filterType, filterProgress, sortType } = this.props;

    let filterTasks = [];
    switch (filterType) {
      case "filterProgress":
        if (filterProgress === -1) {
          filterTasks = tasks;
        } else {
          for (let task of tasks) {
            if (parseInt(task.status, 10) === filterProgress) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;
      case "filterSearch":
        filterTasks = tasks.filter(task => {
          return (
            task.name
              .toLowerCase()
              .indexOf(this.props.filterSearch.toLowerCase()) != -1
          );
        });
        break;
      case "sort":
        filterTasks = tasks;
        if (sortType === "asc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) return -1;
            if (x > y) return 1;
            return 0;
          });
        }
        if (sortType === "desc") {
          filterTasks.sort((a, b) => {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
          });
        }
        break;
      case "filterLabel":
        break;
      case "filterPriority":
      default:
        filterTasks = tasks;
        break;
    }

    let elmItem = filterTasks.map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          editTask={this.props.editTask}
          changProgress={this.props.changProgress}
        />
      );
    });
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>
            <div className="col-md-6">
              <Search changeFilterSearch={this.props.changeFilterSearch} />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <THead />
            <tbody>{elmItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskItems;
