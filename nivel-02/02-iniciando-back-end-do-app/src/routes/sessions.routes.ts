import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const autenticateUser = new AuthenticateUserService();

    const { user, token } = await autenticateUser.execute({ email, password });
    delete user.password;
    return response.json({ user, token });
  } catch (err) {
    let errorMessage = 'Failed to do something exceptional';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return response.status(400).json({ error: errorMessage });
  }
});

export default sessionsRouter;
