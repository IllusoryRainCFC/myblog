# IllusoryRain's Blog
> 为什么想做这个博客：看过很多学长学姐的优秀博客，再加上自己的兴趣，于是在大一寒假摸索出来这样一个博客。

- 在线访问：[IllusoryRain's Blog](https://illusoryrainzjuisee.github.io/)
- 博客框架：[Hexo](https://hexo.io/)
- 当前主题：[hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
- 部署平台：[GitHub Pages](https://pages.github.com/)

## 本地运行
请先安装 [Node.js](https://nodejs.org/)，然后在项目根目录执行：
```bash
npm install -g hexo-cli
```
然后执行：
```bash 
hexo v
```
获得版本号后执行：
```bash
hexo s
```
启动后访问 `http://localhost:4000/` 即可预览博客。

## 常用命令
```bash
# 创建新文章
hexo new "文章标题"

# 清理缓存和已生成的静态文件
hexo clean

# 生成静态文件
hexo generate 或 hexo g

# 启动本地预览服务器
hexo server 或 hexo s

# 部署到 GitHub Pages
hexo deploy 或 hexo d
```

## 项目结构
```text
.
|-- source/          # 博客文章、页面、图片等源文件
|   |-- _posts/      # Markdown文章
|   `-- images/      # 图片资源
|-- themes/          # Hexo主题
|-- scaffolds/       # 文章模板
|-- _config.yml      # Hexo站点配置
|-- package.json     # 项目依赖与命令
`-- README.md        # 项目说明
```

## 写作与部署
文章保存在 `source/_posts/` 目录中。完成编辑后，建议先执行 `hexo clean` 和 `hexo g` 检查静态站点能否正常生成，再通过 `hexo d` 发布到 `gh-pages` 分支。

## License
除非文章中另有说明，博客文章与图片的版权归作者所有；主题及第三方依赖遵循各自的开源许可证。
