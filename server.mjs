import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(json());

const users = [
  { username: 'user1', userGroup: 'group1' },
  { username: 'user2', userGroup: 'group2' },
];

const tasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'This is the description for Task 1.',
    completed: false,
    isDeleted: false,
    userGroup: 'group1',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'This is the description for Task 2.',
    completed: true,
    isDeleted: false,
    userGroup: 'group1',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'This is the description for Task 3.',
    completed: false,
    isDeleted: false,
    userGroup: 'group2',
  },
];

app.post('/login', (req, res) => {
  const { username } = req.body;
  const user = users.find(user => user.username === username);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/tasks', (req, res) => {
  const { userGroup } = req.query;
  console.log(req)
  const userTasks = tasks.filter(task => task.userGroup === userGroup);
  res.json(userTasks);
});

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
