import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return response.status(400).json({ error: errorMessage });
  }
});

export default usersRouter;