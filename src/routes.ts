import Router from '@koa/router';
import UserController from './controllers/user';

const router = new Router();

// users 相关的路由
router.get('/users', UserController.listUsers);
router.get('/usersBySql', UserController.listUsersBySql);
router.get('/users/:id', UserController.showUserDetail);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users', UserController.addUser);

export default router;
