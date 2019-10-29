import React, { Component } from "react";
import Search from "../search";
import Users from "../users";
import Modal from "../modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      editMode: false,
      editUser: {},
      filterStr: null
    };
  }
  componentDidMount() {
    localStorage.getItem("user") &&
      this.setState({
        userList: JSON.parse(localStorage.getItem("user"))
      });
  }
  render() {
    return (
      <div>
        <h1 className="display-4">User List</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search _setFilterString={this._setFilterString} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => this._toggleEditMode(false)}
          >
            Add User
          </button>
        </div>
        <Users
          _toggleEditMode={this._toggleEditMode}
          _deleteUser={this._deleteUser}
          _getEditUser={this._getEditUser}
          userList={this.state.userList}
        />
        <Modal
          editUser={this.state.editUser}
          _addUser={this._addUser}
          _editUser={this._editUser}
          editMode={this.state.editMode}
        />
      </div>
    );
  }
  _addUser = user => {
    let updateUserList = [...this.state.userList];
    updateUserList.push(user);

    this._udpateUserList(updateUserList);
  };
  _deleteUser = username => {
    let viTri = this.state.userList.findIndex(
      item => item.username === username
    );
    if (viTri != -1) {
      // this.setState(prevState => {
      //   this.updateUserList.splice(viTri, 1);
      // });
      let updateUserList = [...this.state.userList];
      updateUserList.splice(viTri, 1);
      this._udpateUserList(updateUserList);
    }
  };
  _toggleEditMode = bool => {
    this.setState({
      editMode: bool
    });
  };
  _getEditUser = user => {
    this.setState({
      editUser: user
    });
  };
  _editUser = user => {
    const index = this.state.userList.findIndex(
      item => item.username === user.username
    );
    let updateUserList = [...this.state.userList];
    updateUserList[index] = user;
    this._udpateUserList(updateUserList);
  };
  _udpateUserList = updateList => {
    this.setState(
      {
        userList: updateList
      },
      () => {
        localStorage.setItem("user", JSON.stringify(this.state.userList));
      }
    );
  };

  _setFilterString = filterStr => {
    this.setState({ filterStr });
  };
}

export default Home;
