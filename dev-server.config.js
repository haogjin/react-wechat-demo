const servers = [
  { name: '/SSO-SERVER' }, // 登录
  { name: '/JURISDICTION-SERVICE-MAGPIE/' }, // 权限
  { name: '/JURISDICTION-SERVICE/' }, // 公共服务
  { name: '/organization-service/' }, // 组织机构管理
  { name: '/BASE-OPENPLATFORM' }, // 开放接口
  { name: '/navvy-manager-server' }, // 数据同步
  { name: '/BASE-DATADICT' }, // 通用
  // 公共基础
  { name: '/BASE-VARIETY' }, // 品种管理
  { name: '/BASE-MARKET' }, // 市场管理
  { name: '/BASE-JOBS' }, // 定时任务
  { name: '/BASE-SYSCOMMAND' }, // 指令管理
  { name: '/contract-service' }, // 行政区划
  { name: '/BASE-REGION' }, // 公共接口
  { name: '/DEVOPS-SERVER' }, // 白名单管理
  { name: '/BASE-SWITCHRULE' }, // 规则转换
  { name: '/BASE-ILOG' }, // 日志
  { name: '/BASE-VERSIONUPGRADE' }, // APP版本管理
  { name: '/USER-SERVER' },
  { name: '/BASE-APPVERSION-GRAYPUBLISH' }, // APP日志管理
  { name: '/DOWNPAGE-SERVER' }, // 下载页管理
  { name: '/BASE-LABEL' }, // 标签管理
  { name: '/BASEINFO-SERVICE' }, // 关注领域
  { name: '/message-centre' }, // 新消息模板
  { name: '/tag-server' }, // 新标签
  { name: '/PCUSER-SERVICE' }, // 用户
  { name: '/BASE-DYNAMICFORM' }, // 品类
  { name: '/PCUSER-SERVICE' }, // 客户组织管理
  { name: '/ACCOUNT-SERVICE' }, // 组织账号
  { name: '/BIG-DATA-REPORT' }, // 数据字典
  { name: '/REPORT-MODEL' }, // 数据字典
  { name: '/REPORT-MODEL-SERVER' }, // 报表平台
  { name: '/metadata-market-service' }, // 元数据管理
  { name: '/dataMarket', target: 'http://192.168.6.164:10051' }, // 元数据管理
  { name: '/MASTERDATA-MANAGER-SERVICE' }, // 主数据管理
  { name: '/tms-manager-service' }, // CMS
  { name: '/dbSource', target: 'http://192.168.6.164:10051' }, // 元数据管理
  { name: '/CENSOR-MANAGER-SERVICE' }, // 区块链
  { name: '/content-audit-service' }, // 内容审核
  { name: '/BASE-FILEMGT' }, // 文件上传
  { name: '/uploadSync' }, // 文件上传
  { name: '/checkServiceExec' }, // 文件上传
  { name: '/BASE-VERSIONMGT' }, // APP版本管理(新)
  { name: '/base-versionmgt-local' }, // app版本管理(本地)
  { name: '/auth-server' }, // 登录前获取
]

const proxyObj = servers.reduce((proxyObj, item) => {
  console.log(11)
  console.log(proxyObj)
  proxyObj[item.name] = {
    target: item.target || 'http://192.168.11.198:30005', // http://seedtest.ap88.com
    changeOrigin: true,
  }
  return proxyObj
}, {})

module.exports = proxyObj
