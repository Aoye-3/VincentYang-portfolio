# 杨雯捷 · Portfolio

个人作品集网站，基于 [Vinod Jangid 的开源作品集模板](https://github.com/vinodjangid07/vinodjangid07.github.io) 修改。保留了原模板的分字母 Hero、悬浮导航、项目卡片和交互方式，替换为个人项目、经历和图片。首页的项目卡片分别进入 AI 灵感助手、PMAgent-Canvas 和更多项目详情页；项目板面按原作品集顺序展示，点击可查看原尺寸。纯静态 HTML/CSS/JS，无需安装依赖。

## 本地预览

在本目录运行：

```powershell
python -m http.server 5501
```

打开 <http://localhost:5501/>。

## 文件说明

- `index.html`：首页内容
- `style.css`：Vinod 模板原始样式，保留 MIT 许可
- `custom.css`：个人内容与视觉的适配样式
- `main.js`：基于模板交互逻辑改写的导航、主题和鼠标效果
- `projects/`：AI 灵感助手、PMAgent-Canvas 和更多项目页面
- `assets/images/boards/`：原作品集第 04–47 页的 WebP 图片，第 26 页使用 `26-修改.jpg`
- `assets/images/profile.webp`：个人形象图片

## GitHub Pages 部署

目标仓库：[Aoye-3/VincentYang-portfolio](https://github.com/Aoye-3/VincentYang-portfolio)。预期访问地址：

<https://aoye-3.github.io/VincentYang-portfolio/>

仓库应将 `main` 分支的 `/ (root)` 设为 GitHub Pages 来源：**Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**。网站直接从根目录发布，不需要构建步骤。修改内容后推送到 `main`，GitHub Pages 会重新发布。

## 版权

网站代码沿用原模板的 MIT License 和版权声明，见 [LICENSE](LICENSE)。个人文字、肖像及项目图片的版权归杨雯捷所有，不随网站代码的 MIT 许可开放授权。

公开仓库仅应包含本目录，不要上传上一级求职材料文件夹。
