import { useForm } from 'react-hook-form';
import { TextInput } from 'flowbite-react';

function TaskForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Title
        <TextInput {...register('title', { required: true })} />
      </label>

      <label>
        Description
        <input {...register('description')} />
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
