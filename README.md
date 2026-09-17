# 杨雯捷 · Portfolio

杨雯捷的个人作品集，基于 [Vinod Jangid 的开源作品集模板](https://github.com/vinodjangid07/vinodjangid07.github.io) 迭代。首页采用纯黑背景、缓慢漂浮的作品画面与鼠标局部显影；向下滚动进入分类作品列表。UX 与产品体验案例优先展示，兴趣创作点击展开。三个详情页保留 44 张作品集板面，并提供章节导航和放大阅读器。网站仍为纯静态 HTML/CSS/JS，无需构建或安装运行依赖。

## 本地预览

在本目录运行：

```powershell
python -m http.server 5501 --bind 127.0.0.1
```

打开 <http://localhost:5501/>。

## 文件说明

- `index.html`：首页内容
- `style.css`：Vinod 模板原始样式，保留 MIT 许可
- `custom.css`：个人内容与视觉的适配样式
- `main.js`：导航、主题、局部显影、滚动渐入、分类筛选和板面阅读器
- `projects/`：AI 灵感助手、PMAgent-Canvas 和更多项目页面
- `assets/images/boards/`：原作品集第 04–47 页的 WebP 图片，第 26 页使用 `26-修改.jpg`
- `assets/images/profile.webp`：个人形象图片
- `assets/images/discovery/`：精选作品引导区的 25 张压缩背景素材，来源见 `docs/discovery-assets.json`
- `scripts/build_discovery_assets.py`：从本地 `页面图片/` UX 与获奖证书目录生成等比例缩略图、素材清单及首页 template（需要 Pillow）
- `scripts/verify_portfolio.py`：浏览器验收脚本（需要本机 Python、Playwright、Pillow 与 Edge）
- `.local/`：本地截图、验收报告和浏览器临时文件，已从 Git 排除

## 设计与维护文档

- [改版前站点评估与结构地图](docs/01-site-audit.md)
- [个性化体验方案：分类、案例与交互](docs/02-experience-blueprint.md)
- [维护指南：文件入口、稳定链接与检查方法](docs/03-maintenance-guide.md)
- [本轮实现与验收说明](docs/04-implementation.md)

启动本地服务器后运行 `python scripts/verify_portfolio.py`。检查覆盖 360–1920px、键盘/触屏、分类筛选、图片阅读器、减少动效及无 JavaScript 浏览；报告写入 `.local/acceptance/`。当前页面实现以第 04 份文档为准，原详情页地址与板面文件名保持兼容。

## GitHub Pages 部署

目标仓库：[Aoye-3/VincentYang-portfolio](https://github.com/Aoye-3/VincentYang-portfolio)。预期访问地址：

<https://aoye-3.github.io/VincentYang-portfolio/>

仓库应将 `main` 分支的 `/ (root)` 设为 GitHub Pages 来源：**Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**。网站直接从根目录发布，不需要构建步骤。修改内容后推送到 `main`，GitHub Pages 会重新发布。

## 版权

网站代码沿用原模板的 MIT License 和版权声明，见 [LICENSE](LICENSE)。个人文字、肖像及项目图片的版权归杨雯捷所有，不随网站代码的 MIT 许可开放授权。

公开仓库仅应包含本目录，不要上传上一级求职材料文件夹。
