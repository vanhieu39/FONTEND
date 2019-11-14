import Task from "./Task";
import ListofTasks from "./ListOfTasks";
import TaskData from "./TaskData";

let listOfTasks = new ListofTasks();

for (let task of TaskData) {
  let id = task.id;
  let name = task.name;
  let labelArr = task.labelArr;
  let priority = task.priority;
  let memberIDArr = task.memberIDArr;
  let status = task.status;
  let description = task.description;

  let newTask = new Task(
    id,
    name,
    priority,
    labelArr,
    memberIDArr,
    status,
    description
  );
  listOfTasks.addTask(newTask);
}
export default listOfTasks;
