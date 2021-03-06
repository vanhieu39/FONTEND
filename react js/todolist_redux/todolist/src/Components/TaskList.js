import React, { Component } from "react";
import THead from "./TaskItems/THead";
import Item from "./TaskItems/Item";
import Search from "./TaskItems/Search";
import { connect } from "react-redux";

class TaskList extends Component {
  render() {
    console.log(this.props.tasks);
    let { tasks } = this.props;
    let elmItem = tasks.map((item, index) => {
      return <Item key={index} item={item} index={index} />;
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
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm công việc"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Công việc</th>
                <th className="text-center">Nhãn</th>
                <th className="text-center">Độ ưu tiên</th>
                <th className="text-center">Người thực hiện</th>
                <th className="text-center">Xử lý</th>
                <th className="text-center">Tình trạng</th>
              </tr>
            </thead>
            <tbody>{elmItem}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapStateToProps,
  null
)(TaskList);
