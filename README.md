# jyutping.org

本站使用 [Astro](https://astro.build/) 、React、TailwindCSS 開發，所有頁面內容都喺下面幾個路經中：

```text
src/components
src/content
src/pages
```

目前有 `yue`、`yue-Hans`、`cmn`、`en`、`ja`、`nan`、`vi`、`wuu` 八個語言版本，歡迎提交 PR 貢獻內容翻譯。

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

### 字體取樣

因為個粵拼字體體積太大，本站用咗 font subsetting 嚟縮細個昭源黑體粵拼字體。如果網站有內容更新，可能需要重新跑下面嘅命令嚟重新生成個 `ChironHeiHK-lshk-subset.woff2`：

```bash
glyphhanger ./dist/**/*.html --unicodes > unicodes.txt
pyftsubset ./public/ChironHeiHK-lshk.woff \
           --output-file=./public/ChironHeiHK-lshk-subset.woff2 \
           --unicodes-file=unicodes.txt \
           --layout-features='*,!liga,!dlig,!rlig' \
           --flavor=woff2 \
           --ignore-missing-unicodes
```
