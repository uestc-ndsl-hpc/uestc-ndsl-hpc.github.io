# UESTC NDSL HPC 团队主页

本项目是电子科技大学 NDSL HPC 团队（张少帅老师课题组）的官方网站，基于 [VitePress](https://vitepress.dev/) 构建，聚焦高性能计算（HPC）与数值线性代数领域的研究与展示。

## 项目简介

- **团队介绍**：由张少帅老师带领，专注于高性能计算、GPGPU、矩阵计算等方向。
- **主要内容**：
  - 团队成员与校友介绍
  - 最新学术论文与出版物
  - 研究方向与成果展示
  - 团队风采图片集

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run docs:dev
```

### 构建发布

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 目录结构

- `docs/`：主文档目录
  - `index.md`：主页
  - `teams.md`：团队成员
  - `pub.md`：论文与出版物
  - `gallery.md`：图片集
  - `.vitepress/`：VitePress 配置与主题
- `package.json`：依赖与脚本

## 主要依赖

- [vitepress](https://vitepress.dev/)：文档与静态网站生成
- [vitepress-markdown-timeline](https://www.npmjs.com/package/vitepress-markdown-timeline)：时间线插件

## 团队联系方式

- 主页：[https://github.com/uestc-ndsl-hpc](https://github.com/uestc-ndsl-hpc)
- 邮箱：szhang94@uestc.edu.cn 

## 主页更新日志

- 美化了团队页面和画廊页面
- 为画廊页面添加了若干组件
- 提供图片托管解决方案，方便团队成员将自己添加到团队页面