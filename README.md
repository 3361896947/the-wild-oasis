# The Wild Oasis

一个现代化的 React + Vite 酒店管理系统 Demo

## 项目简介

The Wild Oasis 是一个基于 React 18、Vite、Styled-components、React Query、Supabase 等技术栈开发的酒店管理系统前端项目。它包含了用户认证、舱房管理、预订管理、入住/退房、仪表盘统计、设置等完整业务模块，适合学习中大型 React 应用架构与最佳实践。

## 技术栈

- React 18
- Vite
- Styled-components
- React Query
- React Router v6
- Supabase (模拟后端 API)
- date-fns

## 主要功能

- 用户注册、登录、登出、资料修改、密码修改
- 舱房（Cabin）增删改查
- 预订（Booking）管理、入住、退房
- 仪表盘数据统计与可视化
- 支持暗黑/明亮模式切换
- 全局错误边界与加载指示
- 响应式布局，适配桌面与移动端

## 目录结构

```
src/
	App.jsx                // 应用入口
	main.jsx               // 渲染入口
	context/               // 全局 Context（如暗黑模式）
	features/              // 业务模块（authentication, bookings, cabins, ...）
	hooks/                 // 自定义 hooks
	pages/                 // 路由页面
	services/              // API 封装
	styles/                // 全局样式
	ui/                    // 通用 UI 组件
	utils/                 // 工具函数
```

## 快速开始

1. 安装依赖

```bash
npm install
```

2. 启动开发服务器

```bash
npm run dev
```

3. 打开浏览器访问

```
http://localhost:5173
```

## 账号体验

- 可自行注册新账号，或使用演示账号：
  - 用户名/邮箱：`demo@demo.com`
  - 密码：`123456`

## 相关说明

- 本项目仅为前端演示，后端数据由 Supabase 提供 mock。
- 适合 React 进阶、全栈开发、企业级项目架构学习。

## License

MIT
