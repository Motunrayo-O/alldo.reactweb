import { TodoTask } from "../entities/taskEntities";

const useTasks = () => {
  let allTasks: TodoTask[] = [
    {
      title: "Buy milk",
      dueDate: new Date(2023, 5, 14),
      id: "dee920fd-0443-4572-8d92-74906bb480b2",
      createdBy: { name: "Sean Davis" },
      isCompleted: false,
    },
    {
      title: "Collect Child",
      dueDate: new Date(2023, 12, 24),
      id: "01a32f2d-1cb5-4d5b-9172-8fda972f83d5",
      createdBy: { name: "Sean Davis" },
      isCompleted: false,
    },
    {
      title: "Cook Peanuts",
      dueDate: new Date(2024, 2, 1),
      id: "bec05bb6-26d5-49cc-b460-7bb049c65fbb",
      createdBy: { name: "Sean Davis" },
      isCompleted: false,
    },
    {
      title: "Add margin",
      dueDate: new Date(2024, 9, 4),
      id: "299a52cc-4ebe-46c7-9687-fb031e882ed4",
      createdBy: { name: "Sean Davis" },
      isCompleted: false,
    },

    //Completed
    {
      title: "Phone president",
      dueDate: new Date(2022, 9, 4),
      id: "d2a07e71-f36f-440b-b22d-6a25c49c9112",
      createdBy: { name: "Jeanie Mai" },
      isCompleted: true,
    },
    {
      title: "Call Tyrone",
      dueDate: new Date(2022, 12, 15),
      id: "fc34caf5-8d48-4942-af35-358983a729bc",
      createdBy: { name: "Claudia Jordan" },
      isCompleted: true,
    },
    {
      title: "Pick up your feelings",
      dueDate: new Date(2023, 8, 19),
      id: "9d43593c-c726-44cb-a0ef-f455284fdd60",
      createdBy: { name: "Jami Roquai" },
      isCompleted: true,
    },
  ];

  return allTasks;
};

export default useTasks;
