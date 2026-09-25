# AGENTS.md

## 项目目标

本仓库是桃源耕云客（firstsaofan）的 Docusaurus 多项目文档中心。正式文档服务于实际项目，初始教程仅作为写作参考。

## 公开仓库与敏感信息

- 此仓库是桃源耕云客的公开 GitHub 文档仓库，通过 GitHub Pages 在线发布。
- 每次新增或修改内容前，必须脱敏 API Key、Token、账号、密码、验证码、私钥、连接字符串等敏感信息；示例统一使用占位符。

## 内容结构

- `docs/projects/<project>/`：正式项目文档。
- `docs/intro.mdx`：维护者入门参考，保留在仓库但不出现在正式构建。
- `docs/agent-guide.mdx`：面向维护者和 Agent 的内部文档，保留在仓库但不出现在正式构建。
- `docs/tutorial-basics/`、`docs/tutorial-extras/`：Docusaurus 教程参考，默认不加入正式侧边栏。
- `sidebars.ts`：正式文档导航的唯一入口。
- `docusaurus.config.ts`：站点信息、导航、页脚和 GitHub Pages 配置。

## 文档规则

- 正式项目文档只能放在对应的 `docs/projects/<project>/` 目录。
- 每个页面只使用一个一级标题，标题层级不得跳级。
- 先写用户目标和已验证步骤，再写概念与实现细节。
- 命令、配置、JSON、YAML 和代码块必须声明语言。
- 不得编造功能、参数、接口、兼容性、版本号或部署步骤；未确认内容标记为“待补充”。
- 文档使用简体中文；代码标识符、命令和产品原名保持原文。
- 站内链接使用相对路径，图片必须提供替代文本。
- 新页面必须加入 `sidebars.ts` 中正确的项目分类。

## 推荐项目目录

按实际需要创建页面，不创建没有内容的占位文件：

```text
index.mdx
installation.mdx
configuration.mdx
usage.mdx
api.mdx
deployment.mdx
faq.mdx
```

## 修改流程

1. 先阅读相关项目代码、README、配置和现有文档。
2. 只修改与任务相关的文档、导航和配置。
3. 保留 `docs/tutorial-basics/` 与 `docs/tutorial-extras/`，除非用户明确要求整理教程。
4. 运行 `npm run typecheck`。
5. 运行 `npm run build`。
6. 不执行 `git commit`、`git push` 或任何外部发布操作，除非用户明确要求。

## 外部资料访问边界

- 外部项目目录一律只读，不得创建、修改、移动或删除其中的任何文件。
- 只有用户明确指定的路径可以读取；当前 FIRE自由 项目允许读取的源资料路径为 `F:\GitHub\FIRE自由\docs`。
- 未获得用户明确授权时，不得读取外部项目的源代码、配置、环境文件或其他目录。
- 所有生成内容只能写入当前文档工作区：`F:\GitHub\firstsaofan文档仓库\firstsaofan.github.io`。
- 不执行外部项目的安装、构建、提交、推送或部署操作。

## FIRE自由 文档来源

FIRE自由 的用户文档根据 `F:\GitHub\FIRE自由\docs` 中的源文档整理。平台规则、免责声明和运营教程中的草稿状态必须保留；内部 API 对接待办等开发记录不自动发布为公开页面。

