export interface ITask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    isDeleted: boolean;
    userGroup: string | undefined;
  }