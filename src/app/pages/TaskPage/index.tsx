import { useEffect, useState } from "react";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";
import { useSnackbar } from "notistack";
import { useQuery } from "react-query";
import { ITask } from "../../../interface/ITask";
import { useAuth } from "../../../infrastructure/context/AuthContext";
import { getTasks } from "../../../infrastructure/endpoints/api";


const TaskPage: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const [tasks, setTasks] = useState<ITask[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      if(user){
        const data = await getTasks(user?.userGroup);
        setTasks(data);
      }
    };
    fetchData();
  }, [user?.userGroup]);

  const addTask = (title: string, description: string) => {
    const newTask = { id: Math.random().toString(36).substring(2),title, description, completed: false, isDeleted: false, userGroup: user?.userGroup };
    setTasks([...tasks, newTask]);
    enqueueSnackbar('Task added successfully',{variant:"success"})
  };
  const onStatusChange = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    ));
    enqueueSnackbar('Task status change successfully',{variant:"success"})
  }
  const onDelete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? {...task, isDeleted: true} : task
    ));
    enqueueSnackbar('Task delete',{variant:"info"})
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
