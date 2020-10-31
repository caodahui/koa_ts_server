import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import { logger } from './middleware/logger';
import router from './routes';

// 初始化 Koa 应用实例
const app = new Koa();

createConnection()
  .then(() => {
    // 初始化 Koa 应用实例
    const app = new Koa();

    // 注册中间件
    app.use(logger());
    app.use(cors());
    app.use(bodyParser());  //解析请求参数

    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        // 只返回 JSON 格式的响应
        // ctx.status = err.status || 500;
        ctx.body = { code: '500', data: '', message: err.message || 'Internal server error' };
        console.log(err);
      }
    });

    // 响应用户请求
    app.use(router.routes()).use(router.allowedMethods());

    // 运行服务器
    app.listen(3000, () => {
      console.log('Service started at http://localhost:3000');
      console.log(process.env.NODE_ENV);
    });
  })
  .catch((err: string) => console.log('TypeORM connection error:', err));
