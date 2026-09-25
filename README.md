# 桃源耕云客（firstsaofan）文档中心

这是桃源耕云客（firstsaofan）的统一文档站点，用于集中维护多个项目的说明、使用指南、部署记录与技术文档。

## 项目结构

- `docs/`：文档内容与项目目录。
- `src/pages/`：站点页面与首页。
- `static/`：站点静态资源。
- `docusaurus.config.ts`：站点、导航和部署配置。

Docusaurus 初始化教程保留在 `docs/tutorial-basics/` 与 `docs/tutorial-extras/`，作为 Markdown 编写和配置参考，不会出现在正式侧边栏中。

## 本地开发

```bash
npm install
npm run start
```

构建生产版本：

```bash
npm run build
```

## Agent 协作

项目内的 `AGENTS.md` 规定了文档目录、Markdown 格式和提交前检查要求。后续为项目补充文档时，应遵循该文件。
