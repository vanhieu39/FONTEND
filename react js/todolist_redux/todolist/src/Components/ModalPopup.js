import React, { Component } from "react";
import CheckboxGroup from "react-checkbox-group";

class ModalPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: [],
      labelArr: []
    };
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onSubmit = event => {
    event.preventDefault();

    this.props.addNewTask(this.state);
    this.props.onEditTask(this.state);
  };
  memberChanged = newMember => {
    this.setState({
      memberIDArr: newMember
    });
  };
  labelChanged = newLabel => {
    this.setState({
      labelArr: newLabel
    });
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps && nextProps.isAddNewTask) {
      this.clearForm();
    }
    if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        description: nextProps.taskEditing.description,
        priority: nextProps.taskEditing.priority,
        memberIDArr: nextProps.taskEditing.memberIDArr,
        labelArr: nextProps.taskEditing.labelArr
      });
    }
  };
  clearForm = () => {
    this.setState({
      id: "",
      name: "",
      description: "",
      priority: "",
      memberIDArr: [],
      labelArr: []
    });
  };

  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <form onSubmit={this.onSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description"
                    name="description"
                    onChange={this.onChange}
                    value={this.state.description}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Độ ưu tiên:</label>
                  <select
                    className="form-control"
                    id="priority"
                    name="priority"
                    onChange={this.onChange}
                    value={this.state.priority}
                  >
                    <option value={-1}>Chọn độ ưu tiên</option>
                    <option value={3}>Thấp</option>
                    <option value={2}>Trung bình</option>
                    <option value={1}>Cao</option>
                  </select>
                </div>
                <CheckboxGroup
                  checkboxDepth={2} //this is needed to optimize the checkbox group
                  name="memberIDArr"
                  onChange={this.memberChanged}
                  value={this.state.memberIDArr}
                >
                  {Checkbox => (
                    <>
                      <h4> Người thực hiện</h4>
                      <br />
                      <label>
                        <Checkbox value="user_2" /> Phóa Nghĩa Văn
                      </label>
                      <label>
                        <Checkbox value="user_3" /> Nguyễn Tiến Minh Tuấn
                      </label>
                      <label>
                        <Checkbox value="user_4" /> Đặng Trung Hiếu
                      </label>
                      <label>
                        <Checkbox value="user_5" /> Trương Tấn Khải
                      </label>
                    </>
                  )}
                </CheckboxGroup>
                <br />
                <br />
                <CheckboxGroup
                  checkboxDepth={2} //this is needed to optimize the checkbox group
                  name="labelArr"
                  onChange={this.labelChanged}
                  value={this.state.labelArr}
                >
                  {Checkbox => (
                    <>
                      <h4> Nhãn</h4>
                      <br />
                      <label>
                        <Checkbox value="FontEnd" /> FontEnd
                      </label>
                      <label>
                        <Checkbox value="BackEnd" /> BackEnd
                      </label>
                      <label>
                        <Checkbox value="API" /> API
                      </label>
                      <label>
                        <Checkbox value="Issue" /> Issue
                      </label>
                    </>
                  )}
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  //data-dismiss="modal"
                >
                  {this.props.isAddNewTask ? "Thêm công việc" : "Sửa công việc"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalPopup;
