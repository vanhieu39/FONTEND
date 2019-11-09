var randomID = require("randomid");

const TaskData = [
  {
    id: randomID(5),
    name: "Soạn React JS",
    labelArr: ["FontEnd", "Backend"],
    priority: 1,
    memberIDArr: ["user_2"],
    status: 2,
    description: "Phải soạn React JS kèm với Node JS và Redux"
  },
  {
    id: randomID(5),
    name: "Dạy Angular JS",
    labelArr: ["Fontend", "API"],
    priority: 2,
    memberIDArr: ["user_4", "user_5"],
    status: 1,
    description: "Nội dung của Angular rất dài và khó"
  },
  {
    id: randomID(5),
    name: "Soạn Python",
    labelArr: ["Backend"],
    priority: 2,
    memberIDArr: ["user_3", "user_5"],
    status: 4,
    description: "Soạn python phải tập trung vào game và giải quyết vấn đề"
  },
  {
    id: randomID(5),
    name: "Thi Hackathon",
    labelArr: ["Fontend", "Backend", "Issue"],
    priority: 3,
    memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
    status: 3,
    description: "Cuộc thi đòi hỏi tư duy và kỹ năng coding"
  }
];
export default TaskData;
