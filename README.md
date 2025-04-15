# jyutping.org

本站使用 [Astro](https://astro.build/) 、React、TailwindCSS 開發，所有頁面內容都喺下面幾個路經中：

```text
src/components
src/content
src/pages
```

目前有`yue`、`cmn`、`wuu`、`nan`、`vi`、`en`六個語言版本，歡迎提交 PR 貢獻內容翻譯。

網站部署喺 Cloudflare Pages，用 Astro preset。

## 開發

用下面嘅指令開發本站：

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
