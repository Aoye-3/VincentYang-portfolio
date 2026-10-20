# 精选作品 · Prism Carousel

用户指定采用 ReactBits Prism Carousel 的中央主卡与两侧收窄预览，保留三个分类，标题附关键词标签，简介沿用现有原文，点击进入对应详情。

本轮在当前工作目录的 `feat/prism-selected-work` 分支实现。首屏竖向收藏卡、作品宇宙、关于我技能图谱与底部探照灯作品墙保持原有交互。

## 内容与组件

- `index.html` 的 `#work-gallery-mount > .work-card` 是唯一作品内容源，当前 5 件作品。名称、简介、封面、详情地址和分类均从这里读取。
- `components/prism-carousel.tsx` 是通过已配置的 shadcn registry 安装的 ReactBits 源码。增加 `onUnavailable` 以在 WebGL 初始化失败后恢复原生列表；减少动效模式改为直接定位和上色，避免原版高刚度弹簧在低帧率下发散、导致当前作品与简介反复变化。
- `src/selected-work.tsx` 负责分类同步、当前作品信息、标签和前后按钮；`work-gallery.css` 提供网站字体、颜色、尺寸和响应式样式，没有引入全站 Tailwind reset。
- 原 Showcase7 React 文件已移除；原生列表样式保留供无 JS、组件加载失败或无 WebGL 浏览。

## 筛选与进入详情

`main.js` 仍负责分类按钮的 `aria-pressed`、原生链接的 `hidden` 和数量，逻辑未改。分类仍为「全部作品 / UI-UX设计 / AIGC媒体类」，数量分别为 5 / 2 / 3。增强轮播监听同一组按钮，切换分类后从该组第一件作品开始。延迟下载时提前选中的分类也会保留。

当前封面、标题和简介都可进入详情；点击侧卡会先切换到该作品。左右按钮、左右方向键、横向拖动可切换，聚焦画廊后按 Enter 打开当前作品。轮播不自动翻页，不接管滚轮；触屏保留纵向页面滚动。主卡保持 16:9 原图比例，侧卡按组件设计收窄，选中后展开并恢复彩色。减少动效模式沿用组件的即时切换。

| 作品 | 标题关键词 | 原详情入口 |
| --- | --- | --- |
| AI 灵感助手 | UX设计 / 产品体验 | `projects/inspiration.html` |
| PMAgent-Canvas | 产品体验 / 设计与开发 | `projects/pmagent.html` |
| DubbingRoom | AI配音 / 创作工具 | `projects/other.html#dubbingroom` |
| 江天黄鹤 | AIGC影像 / 分镜设计 | `projects/other.html#jiangtian` |
| Vivo 创意广告 | 创意广告 / AIGC影像 | `projects/other.html#vivo` |

新增作品时，在首页原生列表添加 `.work-card[data-work-id][data-category]` 并填写原有内容结构；在 `selected-work.tsx` 的 `keywords` 中添加对应标签。未配置专属标签时会使用该分类的基础标签。更新验收脚本中的数量预期，再执行 `npm run typecheck` 和 `npm run build:interactions`，提交生成资源与首页资源版本。

## 验收入口

运行 `python scripts/verify_work_gallery.py`：覆盖 320、390、768、1024、1440、1920px 和短屏，核对分类 5/2/3、键盘与按钮、原简介与详情链接、拖动、页面滚轮、减少动效、浅色主题、慢加载和三种原生回退；另用真实触屏事件验证 390 / 768px 横滑选卡与纵滑页面。报告与截图写入 `.local/work-gallery/`。全站回归使用 `verify_portfolio.py`，章节导航回归使用 `verify_page_progress.py`。

本轮上述轮播专项、类型检查与构建已通过；全站回归通过六种视口、44 张板面与原有展示交互；章节导航另通过 24 个页面 / 视口检查、详情返回和无 JS 锚点检查。独立视觉评审未发现裁切或遮挡，提出的平板封面与标题间距偏大已收紧，并重新查看真实截图。保留中央彩色封面的主导地位和标题旁的轻量标签。
