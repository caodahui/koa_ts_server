import { Context } from 'koa';
import log4js from 'log4js';
import config from '../../config/default';

log4js.configure({
  appenders: {
    out: { type: 'stdout' },
    app: { type: 'file', filename: './logs/app.log' },
  },
  categories: {
    default: { appenders: ['out', 'app'], level: config?.logLevel },
  },
});
const logger = log4js.getLogger('request');

logger.level = config?.logLevel;

//日志中间件
export function loggerWare() {
  return async (ctx: Context, next: () => Promise<void>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    // logger.trace('trace');
    logger.debug(`${ctx.method} ${ctx.url} ${ctx.status} - ${ms}ms`);
    // logger.warn('warn');
    // logger.error('error');
    // logger.info('info');
    // logger.fatal('fatal');
    // logger.mark('mark');
  };
}
