# 站点维护与迭代指南

更新：2026-09-17。本文记录当前仓库中需要维护的文件、稳定链接及每次迭代的检查方法。设计目标和分阶段顺序见 [个性化体验方案](02-experience-blueprint.md)。

## 文件与职责

| 文件 / 目录 | 当前职责 | 修改提醒 |
| --- | --- | --- |
| `index.html` | 首页内容、导航、项目入口与锚点 | 修改分类时保持旧锚点可用；四页导航文案需同步 |
| `projects/inspiration.html` | AI 灵感助手案例与 21 张板面 | 新增摘要/章节，不打乱板面顺序 |
| `projects/pmagent.html` | PMAgent-Canvas 案例与 22 张板面 | 同上；核对个人职责与产品判断的文字 |
| `projects/other.html` | DubbingRoom、江天黄鹤等的旧入口 | 保留 `#dubbingroom` 和 `#jiangtian`，即使未来拆成新页 |
| `style.css` | Vinod 原模板样式 | 尽量保持原文件，便于识别上游规则与许可 |
| `custom.css` | 本站品牌样式、响应式与项目页覆盖 | 新视觉和交互样式优先加在这里，避免重复选择器无限叠加 |
| `main.js` | 导航、主题、分类、兴趣深链、鼠标显影、滚动渐入与板面阅读器 | 局部指针效果遵守减少动效；导航和原图链接保留无 JS 降级 |
| `assets/images/` | 形象照、项目封面、板面 WebP | 图片使用相对路径、明确 `alt`；详情板面继续懒加载 |
| `docs/` | 评估、体验方案、维护决策 | 大的结构调整后同步更新地图和分类表 |
| `scripts/verify_portfolio.py` | 桌面、平板、手机与交互验收 | 新增板面后更新数量预期；截图和报告写入已忽略的 `.local/` |

当前页面使用纯静态文件，GitHub Pages 可从仓库根目录发布；无需在 C 盘安装项目依赖或生成构建产物。原模板版权见根目录 `LICENSE`；个人文案、肖像和项目图另有版权说明。

板面映射：`board-04.webp` 至 `board-24.webp` 属于 AI 灵感助手，`board-25.webp` 至 `board-46.webp` 属于 PMAgent-Canvas，`board-47.webp` 是其他项目概览。共 44 张；第 26 页使用原稿的修改版。新增素材不要覆盖这些既有文件名，以免旧链接指向错误内容。

## 稳定路径与锚点

| 路径 | 用途 |
| --- | --- |
| `/`、`/index.html` | 首页 |
| `/#home`、`/#about`、`/#skills`、`/#projects`、`/#contact` | 当前首页导航入口 |
| `/projects/inspiration.html` | UX 主案例 |
| `/projects/pmagent.html` | 产品体验主案例 |
| `/projects/other.html#dubbingroom` | DubbingRoom 旧入口 |
| `/projects/other.html#jiangtian` | 江天黄鹤旧入口 |
| `/#interests` | 兴趣区，直接访问时自动展开 |
| `/projects/other.html#competitions` | 竞赛经历与团队贡献 |
| 两份主案例的 `#chapter-1` 至 `#chapter-4` | 章节目录；旧 `#board-NN` 板面锚点仍可使用 |

兴趣区已使用 `#interests`，不要删去 `#projects` 或把旧详情页直接改名。若未来拆出新的竞赛、视频或游戏页面，在旧地址放可见链接或等效跳转，并检查仓库内所有相对链接。GitHub Pages 项目站点有 `/VincentYang-portfolio/` 前缀，站内新链接继续使用相对路径，不要写死根路径 `/projects/...`。

## CodeGraph 的实际覆盖范围

本地索引位于 `.codegraph/`，并被 `.gitignore` 排除。本轮同步后的索引为 **3 个文件、106 个节点、161 条关系**，覆盖 `main.js`、Python 验收脚本和素材生成脚本。本站主要结构在 HTML/CSS，CodeGraph 当前不索引这两类文件；页面关系应结合 [当前实现地图](04-implementation.md)、代码搜索及浏览器检查判断。

在本仓库目录内可运行：

```powershell
codegraph status .
codegraph sync .
codegraph explore "main.js"
rg -n 'id="(home|about|skills|projects|contact|interests)"|href="[^"]+"' index.html projects
```

修改 `main.js` 后运行 `codegraph sync .`；修改 HTML/CSS 后更新文档中的页面地图，不要把索引结果误当作完整网站结构。CodeGraph 的项目数据只放在本仓库内，不需要提交索引文件。

## 内容更新流程

1. **先确认分类与证据**：UX 或产品体验项目应有用户/场景、本人职责、设计决策、结果或验证；兴趣项目应有作品、时间、个人贡献与可公开的展示材料。
2. **编辑首页入口**：在对应分类添加卡片。主案例优先只放 1–2 张高质量封面，避免把所有过程板面加载到首页。
3. **更新详情页**：按「背景、我的角色、关键判断、方案、验证、复盘」组织摘要和章节；原板面可继续作为深读材料。
4. **处理图片**：导出适合网页的 WebP，核对清晰度、体积和内容公开范围；详情图片用 `loading="lazy"`，给可理解的替代文字或邻近说明。
5. **检查外部链接**：公开仓库里不要加入带提取码的私密网盘、未核实可公开的联系方式、未授权播放的视频或内部资料。
6. **更新文档**：新增页面时更新本页路径表及站点地图；分类或交互原则变化时更新体验方案。

新增“游戏策划与开发”时，先取得可公开的策划案、原型、截图或试玩地址，再填入口。尚无作品时，兴趣面板可以只列已发布的竞赛与视频，不放空白卡。

## 每次改动的验证

在当前仓库目录内创建或切换新分支后再修改文件；在同一工作目录完成预览与验证。不要创建 worktree、克隆副本或把依赖、缓存、构建产物移到 C 盘。

```powershell
node --check main.js
git diff --check
python -m http.server 5501 --bind 127.0.0.1
```

服务器启动后，在另一个终端运行 `python scripts/verify_portfolio.py`。本机需有 Python 的 Playwright 包及 Edge；可用 `BROWSER_EXECUTABLE` 指定已安装的 Chromium 浏览器路径，用 `PORTFOLIO_URL` 指定预览地址。脚本自动将临时目录设为项目内 `.local/acceptance/`，并检查相对链接、锚点、44 张板面、五种屏幕宽度、菜单、筛选、触屏显影、键盘展开、主题、详情目录、图片阅读器、减少动效和无 JS 阅读。

用浏览器至少检查：首页 1440px 与约 390px 宽度；两份长案例的首屏、目录、原图查看；兴趣面板关闭/展开；Tab、Enter、Space 操作；触屏点击；`prefers-reduced-motion`；四页导航与所有稳定旧链接。若实现站内原图放大层，还需检查 Escape 关闭及焦点返回。测试结束后按预览需求决定是否保留本地服务器。新增 CSS 时查看手机端是否出现横向溢出，新增 JavaScript 时查看控制台错误。纯文档改动只需检查链接、路径和 `git diff --check`。

## 发布状态与安全边界

当前公开仓库 [Aoye-3/VincentYang-portfolio](https://github.com/Aoye-3/VincentYang-portfolio) 的 `main` 已包含网站文件；GitHub Pages 是否已在 **Settings → Pages → Deploy from a branch → main / (root)** 启用，需要在仓库设置与实际地址再次确认。预期地址为 `https://aoye-3.github.io/VincentYang-portfolio/`。本地文档或分支并不会自动发布。

仓库公开时，图片、视频、项目文字和历史提交都可能被访问。新增素材时只放已确认可公开的版本；上一级求职材料目录不能作为网站仓库内容上传。方案只参考 [React Bits](https://github.com/DavidHDev/react-bits) 的局部交互模式，当前没有引入其代码或依赖；若直接复用源码，先遵守其 [许可条款](https://github.com/DavidHDev/react-bits/blob/main/LICENSE.md)。
