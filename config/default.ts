/**
 * @Description: 项目配置文件
 * @Author Jay
 * @Date 2020-11-03 19:57:04
 */

export default {
  /**
   * @Description: 日志等级，可选项："ALL", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL", "MARK", "OFF"
   * @Author Jay
   * @Date 2020-11-03 19:56:43
   */
  logLevel: process.env.NODE_ENV === 'development' ? 'DEBUG' : 'INFO',
};
