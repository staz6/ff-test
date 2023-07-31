import axios from 'axios';
import { ITask } from 'src/interface/ITask';
import { IUser } from 'src/interface/IUser';


export const loginApi = async (username: string): Promise<IUser> => {
  const { data } = await axios.post<IUser>('http://localhost:3000/login', { username });
  return data;
};

export const getTasks = async (userGroup: string): Promise<ITask[]> => {
  const { data } = await axios.get<ITask[]>('http://localhost:3000/tasks', { params: { userGroup } });
  return data;
};
