import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const shows = await req.context.models.Show.findAll();
  return res.send(shows);
});

router.get('/:showId', async (req, res) => {
  const show = await req.context.models.Show.findById(
    req.params.showId,
  );
  return res.send(show);
});

router.post('/', async (req, res) => {
  const show = await req.context.models.Show.create({
    name: req.body.name,
    network: req.body.network,
    weekday: req.body.weekday,
    showtime: req.body.showtime,
    userId: req.context.me.id,
  });

  return res.send(show);
});

router.delete('/:showId', async (req, res) => {
  const result = await req.context.models.Show.destroy({
    where: { id: req.params.showId },
  });

  return res.send(true);
});

export default router;