import ListOfTasks from "./ListOfTasks";
import TaskData from "./TaskData";
import Task from "./Task";

let listOfTasks = new ListOfTasks();

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
    labelArr,
    priority,
    memberIDArr,
    status,
    description
  );
  listOfTasks.addTask(newTask);
}
export default listOfTasks;
