import { Context } from 'koa';
import log4js from 'log4js';

const loggerd = log4js.getLogger();
loggerd.level = 'debug'

//日志中间件
export function logger() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    loggerd.debug(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`)
  };
}
