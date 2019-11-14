import * as types from "../Constants/actionTypes";
import listOfTasks from "../Model/TaskModel";

let initialState = listOfTasks.list;

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      break;
  }
  return state;
};
export default reducer;
