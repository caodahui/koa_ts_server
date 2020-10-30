import { Context } from 'koa';
import { getManager } from 'typeorm';
// import { ResponseModal } from '../utils/types';

import { User } from '../entity/user';

export default class UserController {
  public static async listUsers(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();

    ctx.status = 200;
    ctx.body = { code: '9999', data: users, msg: '成功' };
  }

  public static async listUsersBySql(ctx: Context) {
    // const userRepository = getManager().getRepository(User);
    // const rawData = await userRepository.query('SELECT * FROM USER');
    // ctx.status = 200;
    // ctx.body = { code: '9999', data: rawData, msg: '成功' };
    ctx.throw(400, 'new Error')
  }

  public static async showUserDetail(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    const user = await userRepository.findOne(+ctx.params.id);

    if (user) {
      ctx.status = 200;
      ctx.body = { code: '9999', data: user, msg: '成功' };
    } else {
      ctx.status = 404;
    }
  }

  public static async updateUser(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    await userRepository.update(ctx.params.id, ctx.request.body);
    const updatedUser = await userRepository.findOne(+ctx.params.id);
    if (updatedUser) {
      ctx.status = 200;
      ctx.body = { code: '9999', data: updatedUser, msg: '成功' };
    } else {
      ctx.status = 404;
    }
  }

  public static async deleteUser(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    await userRepository.delete(ctx.params.id);
    ctx.status = 200;
    ctx.body = { code: '9999', data: '', msg: '成功' };
  }

  public static async addUser(ctx: Context) {
    const userRepository = getManager().getRepository(User);
    let newUser = new User();
    newUser = { ...ctx.request.body };
    await userRepository.save(ctx.request.body);

    ctx.status = 200;
    ctx.body = { code: '9999', data: newUser, msg: '成功' };
  }
}
