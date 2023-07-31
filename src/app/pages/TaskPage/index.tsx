import { useState } from "react";
import TaskForm from "./component/TaskForm";
import { ITask } from "./interface/ITask";
import TaskList from "./component/TaskList";
import { randomUUID } from "crypto";

const mockTasks: ITask[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'This is the description for Task 1.',
    completed: false,
    isDeleted: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'This is the description for Task 2.',
    completed: true,
    isDeleted: false,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'This is the description for Task 3.',
    completed: false,
    isDeleted: false,
  },
];



const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(mockTasks);
  const addTask = (title: string, description: string) => {
    const newTask = { id: Math.random().toString(36).substring(2),title, description, completed: false, isDeleted: false };
    setTasks([...tasks, newTask]);
  };
  const onStatusChange = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
  }
  const onDelete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, isDeleted: true} : task
    ));
  }
  const onDragEnd = (sourceIndex: number, destinationIndex: number) => {
    setTasks((prev) => {
      const copiedItems = Array.from(prev);
      const [removed] = copiedItems.splice(sourceIndex, 1);
      copiedItems.splice(destinationIndex, 0, removed);

      return copiedItems;
    });
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="default-heading">Add task</h1>
      <TaskForm addTask={addTask}/>
      <br/>
      <TaskList data={tasks} onStatusChange={onStatusChange} onDelete={onDelete} onDragEnd={onDragEnd}/>
    </div>
  );
};
export default TaskPage;
