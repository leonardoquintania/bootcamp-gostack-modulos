import { Request, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'leonardoquintania@gmail.com',
    password: '123',
    techs: [
      'Node.js',
      'React',
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });
  return response.json({ message: 'Hello World' });
}
