# 首页布局存档：导航与作品卡片避让

日期：2026-10-21。此版本先存档，再尝试竖向 Album Rail。

首页导航由 78px 收至 64px，首屏透明，滚动后显示轻薄底色；桌面完整导航集中到底部 Dock，顶部保留品牌、联系和主题切换。手机折叠菜单保留。

删除独立标题行中的重复「作品选集」，把「设计 · 产品 · 影像」放为作品区域的浮动说明。卡片舞台按视口可用高度设置；1280px 以上屏幕的卡片向右偏移 24–48px。卡片材质、作品封面与原翻转控制器保持原状。

验收：`npm run typecheck`、`node --check main.js` 通过。`scripts/verify_hero_layout.py` 在 7 种视口连续三轮通过，桌面舞台到 Dock 上缘均为 50px；真实运动采样、悬停、减少动效、主题与手机菜单通过。移动端采用纵向滚动，滚动后整张卡片可以进入导航与 Dock 之间的可读区域。

原 `scripts/verify_hero_gallery.py` 通过，包含 80 秒两轮播放、五个入口、键盘切换、悬停、无 JavaScript 及封面失败降级。通用 `scripts/verify_portfolio.py` 跑到 360px 的独立精选作品区时，Prism 的 `data-enhanced` 未出现而失败；本轮没有修改该区域，不把通用验收标为通过。

独立视觉复核一轮：1440×900 和 1366×768 的桌面布局通过，无阻断问题；提出的手机滚动可读性已补充浏览器验证。

截图：`previews/hero-layout-before-album-rail.png`。完整本地证据位于 `.local/hero-layout-20261021/`，不进入 Git。
