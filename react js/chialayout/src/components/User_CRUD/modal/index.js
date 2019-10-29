import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", name: "", email: "", phoneNumber: "" };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.editUser.username,
      name: nextProps.editUser.name,
      email: nextProps.editUser.email,
      phoneNumber: nextProps.editUser.phoneNumber
    });
  }
  render() {
    let { editMode } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {editMode ? "Edit User" : "Add User"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div>
              <form onSubmit={this._handSubmit}>
                <div className="form-group">
                  <label>UserName</label>
                  <input
                    name="username"
                    onChange={this._handleChange}
                    type="text"
                    value={this.state.username}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    name="name"
                    onChange={this._handleChange}
                    type="text"
                    value={this.state.name}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    onChange={this._handleChange}
                    type="text"
                    value={this.state.email}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phoneNumber"
                    onChange={this._handleChange}
                    type="text"
                    value={this.state.phoneNumber}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  _handSubmit = e => {
    let { _addUser, editMode, _editUser } = this.props;
    e.preventDefault();

    if (!editMode) {
      return _addUser(this.state);
    }
    _editUser(this.state);
  };
}

export default Modal;
