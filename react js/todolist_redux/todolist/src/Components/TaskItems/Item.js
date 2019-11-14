import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProgress: ""
    };
  }
  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.changProgress(
          this.props.item.id,
          this.state.selectedProgress
        );
      }
    );
  };
  getLabelColor = label => {
    let labelColor;
    switch (label) {
      case "Fontend":
        return (labelColor = "#389E0D");
      case "Backend":
        return (labelColor = "#722ed1");
      case "API":
        return (labelColor = "#13c2c2");
      case "Issue":
        return (labelColor = "#cf1322");
      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };
  handleEditing = () => {
    this.props.editTask(this.props.item);
  };
  render() {
    let { item, index } = this.props;
    //let item = this.props.item
    //let index = this.props.index

    //label
    console.log("label array", item.labelArr);
    let elmlabel = item.labelArr.map((label, index) => {
      return (
        <i
          key={index}
          className="fa fa-circle"
          style={{ color: this.getLabelColor(label) }}
        ></i>
      );
    });
    //Priority
    let elmPriority;
    let classPriority;
    switch (parseInt(item.priority, 10)) {
      case 1:
        elmPriority = "Cao";
        classPriority = "text-danger";
        break;
      case 2:
        elmPriority = "Trung bình";
        classPriority = "text-success";
        break;
      case 3:
        elmPriority = "Thấp";
        classPriority = "text-primary";
        break;
      default:
        break;
    }
    //members
    let elmMember = item.memberIDArr.map((member, index) => {
      return (
        <img
          key={index}
          src={`./img/${member}.jpg`}
          className="user"
          alt="user"
        />
      );
    });

    let classProgress = 0;

    switch (parseInt(item.status, 10)) {
      case 1:
        classProgress = "fa-spinner";
        break;
      case 2:
        classProgress = "fa-anchor";
        break;
      case 3:
        classProgress = "fa-check-square-o";
        break;
      case 4:
        classProgress = "fa-trash-o";
        break;
      default:
        break;
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{elmlabel}</td>
        <td className={`${classPriority} font-weight-bold text-center`}>
          {elmPriority}
        </td>

        <td className="text-center">{elmMember}</td>

        <td className="text-center">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-toggle="modal"
            data-target="#modalTask"
            onClick={this.handleEditing}
          >
            Sửa
          </button>
          <div className="form-group d-inline ml-2">
            <select
              className="form-group d-inline"
              style={{ width: "65%" }}
              onChange={this.onChange}
              name="selectedProgress"
            >
              <option value={1}>Đang tiến hành</option>
              <option value={2}>Chưa bắt đầu</option>
              <option value={3}>Hoàn thành</option>
              <option value={4}>Hủy bỏ</option>
            </select>
          </div>
        </td>

        <td className="text-center">
          <i className={`fa ${classProgress} mr-2`}></i>
        </td>
      </tr>
    );
  }
}

export default Item;
