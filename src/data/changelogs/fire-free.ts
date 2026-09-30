import type {ChangelogEntry} from '../../components/ChangelogTimeline';

// 更新日志条目：每次发布后由维护者填入，组件自动按日期倒序并按年份分组。
// 字段说明：
// date    发布日期，格式 YYYY-MM-DD。
// title   一句话说明这次更新做了什么。
// kind    变更类型：added 新增 / changed 变更 / fixed 修复 / removed 移除 / docs 文档。
// version 版本号或构建标识，可选。
// tags    细分标签，可选。
// details 变更明细，逐条列出，可选。
export const fireFreeChangelog: ChangelogEntry[] = [
  {
    date: '2026-09-30',
    title: 'v1.0.0 正式上线：首个正式发布版本',
    kind: 'added',
    version: 'v1.0.0',
    tags: ['正式上线', '文档体系'],
    details: [
      '收录 226 个地区数据、7 条 FIRE 路径、13 个社区板块、13 个文章分类和 1091 条内容审核敏感词。',
      '首次发布完整对外文档体系：关于本站、平台规则、免责声明、FIRE 路径释义、系统使用教程、用户上手教程、常见 QA 和系统更新日志，均无需登录即可查看。',
      '开放文章、FIRE 路径、生活地图、任务大厅、技能市场、社区、工具箱、通知中心和个人中心共九个模块。',
      '明确 v1.0 尚未提供的能力：无站内即时通讯、无支付与资金托管、无在线客服、计算器不保存方案、技能市场无站内订单、筛选器不跨设备同步、任务无申请与审批环节、工具箱除计算器外仍在规划中等。',
    ],
  },
];
