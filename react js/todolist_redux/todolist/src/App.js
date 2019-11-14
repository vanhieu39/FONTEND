import React, { Component } from "react";
import "./App.css";
import ModalPopup from "./Components/ModalPopup";
import Controls from "./Components/Controls";
import TaskList from "./Components/TaskList";
import listOfTasks from "./Model/getData";
import randomid from "randomid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null,
      isAddNewTask: true,

      //Filter
      filterType: "",
      filterProgress: -1,
      filterSearch: "",

      //Sort
      sortType: ""
    };
  }
  generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
  };
  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks: tasksJSON
    });
  };
  addNewTask = data => {
    if (this.state.isAddNewTask) {
      data.id = randomid(5);
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
      tasksJSON = [...tasksJSON, data];
      this.setState({
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };
  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true
    });
  };
  editTask = data => {
    this.setState({
      isAddNewTask: false,
      taskEditing: data
    });
  };
  changProgress = (id, progress) => {
    console.log(id, progress);
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    for (let index in tasksJSON) {
      if (tasksJSON[index].id === id) {
        tasksJSON[index].status = progress;
        console.log("status app.js", tasksJSON[index].status);
      }
    }

    this.setState({
      tasks: tasksJSON
    });
    localStorage.setItem("tasks", JSON.stringify(tasksJSON));
  };
  onEditTask = data => {
    if (!this.state.isAddNewTask) {
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));

      for (let i in tasksJSON) {
        if (tasksJSON[i].id === data.id) {
          tasksJSON[i].name = data.name;
          tasksJSON[i].priority = data.priority;
          tasksJSON[i].labelArr = data.labelArr;
          tasksJSON[i].memberIDArr = data.memberIDArr;
          tasksJSON[i].status = data.status;
          tasksJSON[i].description = data.description;
        }
      }

      this.setState({
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };
  changeFilterProgress = filterProgress => {
    this.setState({
      filterType: "filterProgress",
      filterProgress: filterProgress
    });
  };
  changeFilterSearch = filterSearch => {
    this.setState({
      filterType: "filterSearch",
      filterSearch: filterSearch
    });
  };
  changeSortType = sortType => {
    this.setState({
      filterType: "sort",
      sortType: sortType
    });
  };
  render() {
    let {
      tasks,
      isAddNewTask,
      taskEditing,
      filterType,
      filterProgress,
      filterSearch,
      sortType
    } = this.state;
    return (
      <div className="App">
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls
              generateData={this.generateData}
              clearBeforeAddNewTask={this.clearBeforeAddNewTask}
              changeFilterProgress={this.changeFilterProgress}
              changeSortType={this.changeSortType}
            />
            {/* DISPLAY */}
            <TaskList
              tasks={tasks}
              editTask={this.editTask}
              changProgress={this.changProgress}
              filterType={filterType}
              filterProgress={filterProgress}
              changeFilterSearch={this.changeFilterSearch}
              filterSearch={filterSearch}
              sortType={sortType}
            />
          </div>
        </div>
        {/* The Modal */}
        <ModalPopup
          addNewTask={this.addNewTask}
          isAddNewTask={isAddNewTask}
          taskEditing={taskEditing}
          onEditTask={this.onEditTask}
        />
      </div>
    );
  }
}

export default App;
