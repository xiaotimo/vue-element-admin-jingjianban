module.exports = {
  title: '小提莫后台管理-读书系统',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: true,  //是否显示右侧悬浮配置按钮

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,  //是否显示页面标签功能条

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,  //是否将头部布局固定

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,  //菜单栏中是否显示LOGO

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'   //默认显示错误日志的环境
}
