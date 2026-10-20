# 履历结构维护

首页 #about 为个人介绍，后接独立 #experience。旧 HOW I WORK / #skills 模块已按用户要求移除，首页无指向该锚点的链接。

## 追加经历

在 #career-work 内 .experience-list 中复制一条 .experience-item；修改公司、角色、日期、标题、职责和实际项目链接。保持 summary 以及 .experience-detail 结构，默认不加 open。测试条目只位于 .local/resume-architecture/long-list.html，不进入首页。

三分类 .career-group 使用原生 details；只有 #career-work 默认 open。列表 .career-scroll 提供原生滚动及 tabindex=0。公司、角色、日期和加减图标采用已选定的黑底浅蓝编辑式排版。

## 动效与资源

experience.js 仅观察 [data-career-reveal]，一次性移除 is-waiting。完成后不重新隐藏、不吸顶，不控制页面滚轮；键盘焦点进入时立即显示。减少动态效果和缺少 IntersectionObserver 时直接显示；无 JavaScript 时基础样式保持可读。

不要在现有 hero 或 work-stack 的祖先添加新的 overflow/transform。相关原有脚本均保持不变。修改首页样式或脚本后同步 index.html 查询参数为文件 SHA-256 前十位，避免旧缓存。

实际验收见 design-qa.md；本地截图和记录在 .local/resume-architecture/。
