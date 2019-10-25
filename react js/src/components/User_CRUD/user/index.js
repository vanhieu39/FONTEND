import React, { Component } from "react";

class User extends Component {
  render() {
    let { item, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.username}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props._deleteUser(item.username)}
          >
            Delete
          </button>
          <button
            className="btn btn-warning"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              this.props._toggleEditMode(true);
              this.props._getEditUser(item);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
