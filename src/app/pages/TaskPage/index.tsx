import { useState } from "react";
import TaskForm from "./component/TaskForm";

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (title: string, description: string) => {
    const newTask = { title, description, completed: false };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container mx-auto p-4">
      <h1>Add task</h1>
      <TaskForm addTask={addTask}/>
    </div>
  );
};
export default TaskPage;
