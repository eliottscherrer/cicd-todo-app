const router = require('express').Router();

const userApi = require('./user.api');
const authApi = require('./auth.api');
const todoApi = require('./todo.api');

router.get('/health', (req, res) => {
  return res.status(200).json({ ok: true });
});

router.use('/api/user', userApi);
router.use('/api/auth', authApi);
router.use('/api/todo', todoApi);

module.exports = router;
