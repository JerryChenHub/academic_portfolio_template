# Academic portfolio template

这是一个以 Jing Cao 公开主页内容填充的 Astro 学术个人网站模板。页面内容只是示例，发布前请替换姓名、简介、联系方式、肖像、研究成果和项目资料。

## 本地使用

需要 Node 24 和 pnpm 11。

```powershell
pnpm install
pnpm dev
```

浏览器访问 `http://localhost:4321`。发布前运行：

```powershell
pnpm build
pnpm preview
```

## 文件结构

```text
.
├── .github/workflows/deploy.yml    GitHub Pages 自动发布
├── public/media                    已压缩并会公开发布的图片与视频
├── public/og.png                   分享链接时显示的预览图
├── src/content/research            每项研究一个 Markdown 文件
├── src/data/site.ts                姓名、简介、社交链接和项目资料
├── src/layouts/SiteLayout.astro    全站页头、页尾和元数据
├── src/pages                       页面和动态路由
├── src/styles/global.css           全站视觉样式
├── astro.config.mjs                GitHub Pages 地址与路径配置
├── package.json                    依赖和运行命令
└── pnpm-lock.yaml                  锁定依赖版本
```

网站只有少量固定目录。研究条目都放在 `src/content/research`，动态路由会自动产生列表页和详情页，因此增加很多页面时不需要复制页面模板。

## 内容与素材放置规则

`src` 是源代码和结构化文字内容，需要提交。

`public/media` 放已经压缩、确定要公开发布的图片和短视频，需要提交。建议图片使用 WebP 或 AVIF，视频使用 MP4 或 WebM。公开 PDF 可在需要时新建 `public/files` 后放入其中。

`working` 放原始大图、原始视频、剪辑工程、参考网页、临时导出和草稿。这个目录已被忽略，不会上传 GitHub。

`node_modules`、`.pnpm-store`、`.astro` 和 `dist` 都是依赖、缓存或构建产物，已被忽略，不提交。

当前示例把 Sunny 的大 GIF 保留在 `working/reference`，只把静态压缩 WebP 放进 `public/media`。这样原始素材可追溯，同时首屏资源保持轻量。

## 修改个人资料

编辑 `src/data/site.ts`，替换个人资料和社交链接。把肖像放入 `public/media`，然后更新 `portrait` 文件名。

## 增加研究页面

复制 `src/content/research` 中任意一个 Markdown 文件，改成新的文件名并填写 frontmatter。文件名会成为网址，例如：

```text
src/content/research/robot_planning.md
https://你的域名/research/robot_planning/
```

正文 Markdown 会自动显示在详情页。列表顺序由 `order` 控制。

## 发布到 GitHub Pages

最干净的个人主页方案是新建公开仓库 `USERNAME.github.io`，其中 `USERNAME` 是你的 GitHub 用户名。此时访问地址为 `https://USERNAME.github.io/`。

```powershell
git init
git add .
git commit -m "Build academic portfolio template"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

推送后进入 GitHub 仓库的 `Settings`，打开 `Pages`，把 `Source` 设为 `GitHub Actions`。工作流成功后，网站会自动上线。

普通项目仓库也支持。工作流会根据 `GITHUB_REPOSITORY` 自动把仓库名作为路径，因此地址会是 `https://USERNAME.github.io/REPOSITORY/`。

若以后使用自定义域名，在仓库变量中把 `SITE_URL` 设为完整域名，例如 `https://example.com`，并在 GitHub Pages 设置中配置域名。自定义域名模式会自动使用根路径。

## 应提交与不应提交

运行 `git status --short` 时，应看到源代码、配置、工作流、锁文件、README 和 `public/media` 中的发布资产。

不要强制加入任何被 `.gitignore` 排除的目录。尤其不要提交 `working`、`node_modules`、`.pnpm-store`、`.astro` 或 `dist`。
