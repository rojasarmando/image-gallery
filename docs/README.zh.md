# 委内瑞拉海滩 — 图片画廊

委内瑞拉旅游景点的摄影画廊，已迁移到基于 **Astro** 构建的现代静态网站。

该项目最初是 PHP + Bootstrap 3 项目（2017 年，Cátedra Bolivariana），于 2026 年以暗色电影美学重建：不对称画廊、支持键盘操作的原生 lightbox、平滑滚动动画，除 Astro 外零框架依赖。

## 技术栈

- **Astro 5**（静态站点，无集成）
- 手写现代 CSS（自定义属性、grid、`aspect-ratio`、`backdrop-filter`）
- 使用原生 TypeScript 实现 lightbox 和动画
- 使用原生 `<dialog>` 实现 lightbox（上一张/下一张、Esc 键、方向键、滚动锁定）

## 内容

7 个委内瑞拉景点，包含标题、图片和西班牙语介绍，定义在 `src/data/sitios.ts` 中——这是整个网站的唯一数据源。

## 命令

```bash
npm install     # 安装依赖
npm run dev     # 开发服务器（http://localhost:4321）
npm run build   # 静态构建到 dist/
npm run preview # 预览构建结果
```

## 目录结构

```
src/
  data/sitios.ts        # 画廊内容（在此编辑）
  layouts/BaseLayout.astro
  pages/index.astro     # hero + 画廊 + lightbox + 页脚
  scripts/gallery.ts    # lightbox、滚动显示、页头状态
  styles/global.css     # 完整主题
public/
  img/                  # 画廊图片
```

## 致谢

Armando José Rojas Querales — 2017 · 2026

---

**其他语言：** [English](../README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md)
