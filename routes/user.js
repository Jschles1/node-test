import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  console.log('/users request received');
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(
    req.params.userId,
  );
  return res.send(user);
});

export default router;