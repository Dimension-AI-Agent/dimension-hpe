# 訊達 × HPE 驗收網站

**[開啟正式網站](https://dimension-ai-agent.github.io/dimension-hpe/)** · **[查看完整版本與修改紀錄](CHANGELOG.md)**

訊達主導的 HPE 合作網站，包含訊達服務、成功案例、AI 導入指南、訊達文章及聯絡資訊。

## 目前網站

採用 C「整合工作桌」視覺：首頁優先呈現合作影片，成功案例提供影片預覽，服務、文章、指南與聯絡頁沿用一致介面。文章與案例讀取既有公開來源的已核准內容。

- [成功案例與影片](https://dimension-ai-agent.github.io/dimension-hpe/cases.html)
- [AI 導入指南](https://dimension-ai-agent.github.io/dimension-hpe/ai-guide.html)
- [設計規則](DESIGN.md)／[媒體來源](docs/media-sources.md)

## 發布與本機預覽

網站由 GitHub Pages 發布，來源為本儲存庫的 `main` 分支。首頁兩支原始影片沿用本儲存庫的 [Release 附件](https://github.com/Dimension-AI-Agent/dimension-hpe/releases/tag/website-video-2026-11-09)；案例影片沿用公開內容附件。

在儲存庫根目錄執行 `python3 -m http.server 8877 --bind 127.0.0.1`，再開啟 `http://127.0.0.1:8877/`。無須建置；字體、公開文章與影片來源需連網。
