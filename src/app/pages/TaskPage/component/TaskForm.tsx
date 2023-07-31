import { useForm } from 'react-hook-form';
import { TextInput, Button } from 'flowbite-react';

interface IFormInput {
    title: string;
    description: string;
}
interface TaskFormProps {
    addTask: (title: string, description: string) => void;
}

const TaskForm : React.FC<TaskFormProps> = ({
    addTask
}) => {
    const { register, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    addTask(data.title,data.description)
    reset();
  };

  return (
    <form className='flex max-w-md flex-col gap-4 mt-2' onSubmit={handleSubmit(onSubmit)}>
      <TextInput placeholder='Title' {...register('title', { required: true })} />

      <TextInput placeholder='Description' sizing="lg" {...register('description')} />

      <Button type="submit" className="max-w-[125px]">Add Task</Button>
    </form>
  );
}

export default TaskForm;
