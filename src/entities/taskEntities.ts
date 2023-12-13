export interface TodoTask {
  title: string;
  dueDate: Date;
  createdBy: User;
  id: string;
  isCompleted: boolean;
  parent?: TodoTask;
}

export interface User {
  name: string;
}

