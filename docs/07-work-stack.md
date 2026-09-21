# 精选展示作品：滚动叠卡

更新：2026-09-21。当前工作目录分支：`feat/stacked-selected-work`。

## 结构与边界

```text
index.html / #projects
├─ .work-discovery              现有斜向图片墙
├─ .selected-work-heading       精选展示作品 / #work-title
├─ .work-toolbar                原分类筛选与数量
└─ .project-list
   ├─ .work-stack               共用 sticky 范围
   │  ├─ .work-card.work-ux     AI 灵感助手
   │  └─ .work-card.work-product PMAgent-Canvas
   └─ .side-project             DubbingRoom 延伸项目
```

首屏 HTML、`hero-gallery.css`、`hero-gallery.js` 与图片墙逻辑不变。主案例的内容、封面、比例和入口保持原样。用户提供的 `Reference/滚动下拉，逐步展示叠加作品卡片.txt` 与截图用于理解叠加视觉；本实现使用原生 HTML/CSS/JS，无额外框架、依赖或滚动劫持。

## 文件职责

- `work-stack.css`：标题、叠卡容器、吸顶层级和后卡覆盖时的边缘。
- `work-stack.js`：测量可用高度、读取可见卡片、按滚动位置轻微缩放。
- `main.js`：继续负责筛选；叠卡只观察每张卡片的 `hidden` 属性，不重复实现筛选。
- `scripts/verify_work_stack.py`：几何位置、覆盖关系、反向滚动、筛选及降级验收。

主卡片移除 `data-scroll-reveal`，避免旧渐入逻辑与叠卡同时设置 transform。其他区块的渐入保持不变。不要给 `.work-stack` 或其父层增加 `overflow: hidden/auto`，这会改变 sticky 的滚动容器。

## 动效参数

| 参数 | 当前值与作用 |
| --- | --- |
| 首张吸顶位置 | 分类栏 CSS top + 分类栏高度 + 16px，随窗口重新测量 |
| 卡片顶边间距 | 28px；JS 的高度判断、进度计算与 CSS 偏移需同步 |
| 前卡缩小 | 每张后续卡片 3%，最多 9%；从顶部中心缩放 |
| 卡片间滚动距离 | `24svh`，给后一张上移覆盖的过程留出距离 |
| 容器尾部 | `::after` 的 `24svh + 80px` 实际流内占位，保证最后阶段前卡仍有足够固定范围；单用 padding 会让前卡提前被推走 |

仅在滚动事件发生时合并到下一帧更新，不使用永久动画循环。向上滚动时自然还原。键盘焦点进入被遮盖的前一张时，将其提升到前层，保证链接可操作。

## 响应式与内容更新

如果任一卡片无法完整放入「视口高度 − 分类栏与叠边」，整个组自动使用普通列表；手机竖排通常采用此模式，避免卡片下半部被遮住。开启减少动态效果、关闭 JavaScript 或筛选后仅剩一张主案例时，也不叠加。

新增主案例：在 `.work-stack` 内增加一个 `.work-card` article，沿用现有 `data-category`、文字、图片和真实链接结构；不要加 `data-scroll-reveal`。无需写固定卡片序号或修改 JS 数量。新增延伸项目放在 `.work-stack` 之后。同步首页默认分类数量文字，并重新执行不同高度的验收。

图片继续完整等比显示，保持既有 `object-fit: contain`，不裁断长图。修改样式或逻辑后，同步 `index.html` 中两个资源的 `?v=` 内容哈希，避免预览浏览器使用旧缓存。

## 验收

本地服务器运行在 5501 后执行：

```powershell
python scripts/verify_work_stack.py
python scripts/verify_portfolio.py
```

定向检查通过：

- 1440×900、1920×1080、1024×768、768×1024：正常叠加，顶边 28px，前卡缩小，后卡位于点击层上方，反向滚动还原。
- 390×844、360×740、1440×600：自动普通列表，无横向溢出或页面错误。
- UX / 产品体验 / 全部筛选切换后布局正确；案例入口有效。
- 减少动态效果和无 JavaScript 均可阅读；首屏 HTML 与改动前一致。
- 全站回归通过：6 组首页尺寸无横向溢出、请求失败或控制台错误；图片墙、筛选、兴趣折叠、主题、手机菜单，以及三个详情页在桌面和手机的章节导航与阅读器正常。

截图与报告保存在忽略目录 `.local/work-stack/`：`1440-first.png`、`1440-incoming.png`、`1440-stacked.png` 展示叠加三个阶段；`390-normal.png` 展示手机布局。测试使用本机 Edge，不能替代真实手机 Safari 验收。全站交互检查报告见 `.local/acceptance/report.json`。
