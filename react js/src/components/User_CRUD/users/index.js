import React, { Component } from "react";
import User from "../user";

class Users extends Component {
  //map tu mang userList ra mang component user tuong ung
  renderUser = list => {
    let comList = list.map((item, i) => {
      return (
        <User
          _deleteUser={this.props._deleteUser}
          _toggleEditMode={this.props._toggleEditMode}
          _getEditUser={this.props._getEditUser}
          key={i}
          item={item}
          index={i}
        />
      );
    });
    return comList;
  };
  render() {
    //destructuring
    let { userList } = this.props;
    //let userList = this.props.userList
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>UserName</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>{this.renderUser(userList)}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
