# 網站版本與修改紀錄

[開啟正式網站](https://dimension-ai-agent.github.io/dimension-hpe/) · [回到專案介紹](README.md) · [GitHub 完整提交歷史](https://github.com/Dimension-AI-Agent/dimension-hpe/commits/main/)

集中記錄本儲存庫的網站更新，依實際提交／合併日期由新到舊排列；日期以台灣時間為準。每個里程碑附上修改摘要、PR 或 commit，方便查看當時的改動。

文章與案例資料由另一個公開內容來源即時同步，其資料變動不一定產生本站 commit。以下筆數、限制與驗證結果均為各次更新當時的紀錄，不代表目前即時資料量。

## 更新總覽

| 日期 | 更新里程碑 | 主要改變 | GitHub 紀錄 |
| --- | --- | --- | --- |
| 2026-11-13 | [首頁新增訊達 × HPE 影片](#release-20261113-partnership-video) | 新增影片、文字封面並調整首頁影片排序與名稱 | [影片 Release](https://github.com/Dimension-AI-Agent/dimension-hpe/releases/tag/website-video-2026-11-13) |
| 2026-11-13 | [連結、聯絡識別與文章影片](#release-20261113-ui) | 全站移除箭頭、聯絡列只留 Logo、影片固定尺寸 | [PR #7](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/7) |
| 2026-11-13 | [AI 導入指南閱讀層級](#release-20261113-guide) | 統一角色標題、調整字體層級與閱讀寬度 | [PR #6](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/6) |
| 2026-11-13 | [C 版全站設計與案例影片](#release-20261113-c) | 影片優先首頁、統一介面、8 支案例影片及操作改善 | [PR #4](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/4) |
| 2026-11-11 | [AI 導入指南](#release-20261111-guide) | 四階段指南、HPE 與訊達各四個說明頁 | [PR #3](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/3) |
| 2026-11-11 | [服務與案例架構調整](#release-20261111-services) | 三項服務說明、集中案例、公開內容同步 | [PR #2](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/2) |
| 2026-11-10 | [聯絡頁更新](#release-20261110-contact) | 方案諮詢、電話、官方網站與手機排版 | [PR #1](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/1) |
| 2026-11-10 | [文章分類與即時同步](#release-20261110-library) | 分類、標籤、搜尋及公開文章同步 | [5493b26](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/5493b26b83b8e683af459b3c94433b46bed61502) |
| 2026-11-09 | [應用情境與文章庫](#release-20261109-content) | 移除合作方案入口、整理案例、站內閱讀 | [9417559](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/941755902ec17189453340ea0cdebee5699fcb1e) |
| 2026-11-09 | [網站發布與網址更新](#release-20261109-publish) | 發布驗收網站、更新網址與專案介紹 | [6294b8e](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/6294b8e) |
| 2026-11-04 | [初版預覽與行動版](#release-20261104-preview) | 建立初版、改善手機導覽、加入首頁方案與文章入口 | [8670b8c](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/8670b8c) |

<a id="release-20261113-partnership-video"></a>

## 2026-11-13｜首頁新增訊達 × HPE 影片

- 依確認的 Demo 新增訊達 × HPE 影片，設為首頁預設與影片選單第一項，並以文字封面呈現播放前畫面。
- 其餘選項依序為「HPE 產品介紹」與「訊達電腦簡介」；保留手動播放及切換時暫停上一支。
- 影片儲存於 [網站影片 Release](https://github.com/Dimension-AI-Agent/dimension-hpe/releases/tag/website-video-2026-11-13)。

<a id="release-20261113-ui"></a>

## 2026-11-13｜連結、聯絡識別與文章影片

以最新 `c3a5168` 為基礎，套用已確認的 Demo 調整；完整保留 PR #6 的指南角色標題、「參考文章」、字級與閱讀寬度。

- 移除首頁、主導覽、服務、案例、文章、指南及角色頁的裝飾連結箭頭，包含動態產生的閱讀與附件入口。保留文字、按鈕、焦點與原生影片操作。
- 聯絡頁的訊達與 HPE 網站列只顯示既有 Logo，刪除重複名稱與網址；圖片保留可讀品牌名稱。HPE 標誌由此頁頁首移至 HPE 列，維持每頁一個。
- 文章內圖片、影片下方不再顯示重複的「開啟附件：檔名」連結；文件下載入口仍保留。
- 文章影片在播放前就預留與圖片同寬的 16:9 容器，完整呈現原片；原生控制與全螢幕保留，播放失敗才顯示備援入口。
- Demo 實測：桌機播放器約 788 × 443px、手機約 319 × 179px，播放前後尺寸相同，下方內容位移小於 0.001px；已實際播放食品及資料湖案例。
- `guide-typography.css` 與最新 main 逐位元組一致，既有文章內容來源、電話及中英文 HPE 聲明保留。

修改與部署紀錄：[PR #7](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/7)。正式站部署及播放驗證結果記錄於該 PR。

<a id="release-20261113-guide"></a>

## 2026-11-13｜AI 導入指南閱讀層級

- 統一四階段的「HPE 在這階段扮演的角色」與「訊達在這階段扮演的角色」，並將文章區標題改為「參考文章」。
- 放大階段內容小標、待確認事項、角色標題與正文，區分標題、內容及輔助連結的閱讀層級。
- 適度放寬正文區並對齊分隔線，改善寬畫面右側留白；保留手機版單欄與原有階段切換、文章及角色連結。

<a id="release-20261113-c"></a>

## 2026-11-13｜C「整合工作桌」全站設計與案例影片

依已確認的 C 版全站 Demo 與案例影片 Demo 更新正式網站。

### 修改內容與目的

| 範圍 | 修改後的介面／行為 | 解決的問題 |
| --- | --- | --- |
| 首頁 | 大幅原始合作影片、側邊影片選擇、段落導覽、列式服務及四階段指南 | 先認識合作內容，再進入服務與導入路徑；移除主視覺中間的分色切割 |
| 全站介面 | 白色與石灰表面、訊達紅色動作、中文標題層次、細線與對齊列 | 首頁、服務、案例、文章、指南、角色頁及聯絡頁維持一致的閱讀秩序 |
| 成功案例 | 左側案例敘事、右側 16:9 原片封面與播放按鈕，獨立保留「閱讀完整案例」 | 以實際媒體取代重複的「了解案例」說明 |
| 案例影片 | 接上當時 8 支已上傳影片；點擊後才載入並原地播放；播放另一支時暫停前一支 | 支援直接觀看，避免初始下載全部影片與多支聲音重疊 |
| 素材比例 | 原片封面不裁切；直式／方形影片保留完整畫面，支援原生控制與全螢幕 | 避免架構、字幕與內容被裁掉 |
| 文章閱讀 | 來源正文至少有兩個 h2 才建立目錄，短文章單欄 | 長文更容易定位，短文不出現空目錄 |
| 文章庫 | 切換分類／標籤保留搜尋詞，支援瀏覽器返回狀態 | 搜尋與分類可一起使用，返回時不遺失篩選 |
| AI 指南 | 階段寫入 URL，支援重整、返回與上一／下一階段；移除角色頁重複階段小標 | 方便分享與接續閱讀，減少重複標題 |
| 手機與鍵盤 | 單欄媒體、手機選單 Escape／外部點擊關閉、可見焦點與減少動態偏好 | 窄螢幕與鍵盤操作保持清楚 |

### 保留的內容與品牌邊界

- 訊達主導識別，HPE 使用既有獨立標誌，完整保留原有中英文產品資訊聲明。
- 文章與案例沿用公開來源的核准內容；客戶案例保持匿名，不新增服務成果、成效數字或品牌核准宣稱。
- material-13 仍不列入成功案例；GreenLake 命名調整限本站顯示層，不回寫內容來源。
- 首頁原始 MP4 沿用既有 GitHub Release，案例影片沿用公開內容附件；此次不新增影片副本或 A／B 候選頁。

### 實作與驗證

共用樣式：`c-base.css`、`refinements.css`、`site-c.css`；行為：`app.js`、`site-c.js`、`ai-guide.js`、`case-list.js`。介面規則記錄於 [DESIGN.md](DESIGN.md)，媒體來源見 [media-sources.md](docs/media-sources.md)。

發布前已完成 Demo 的桌機／手機代表頁檢視、影片切換、橫式與直式影片實際播放、單一播放、文章目錄、搜尋返回、指南階段與聯絡入口檢查。發布版本另檢查 JavaScript 語法、全部本機頁面與資源連結、產品資訊聲明及媒體來源。部署與正式站回讀結果見下方 PR #4 紀錄。

### 部署結果

- [PR #4 與修改討論](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/4)／[部署與正式站驗證結果](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/4#issuecomment-6843195848)。
- 合併版本：[43304e6](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/43304e6f948af0895e61e40592d739f57a958b76)；內容提交：[d97365d](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/d97365d9bd2806b1079ef318065e46cc408e54a7)。
- [GitHub Pages 部署成功紀錄](https://github.com/Dimension-AI-Agent/dimension-hpe/actions/runs/43360649779)。
- 發布前：54 個 HTML 頁面、52 個套用 C 的頁面、1,055 個本機資源／連結及 6 支 JavaScript 檢查通過；原有聲明逐頁比對保留。
- 正式站：33 個頁面與資源回傳 HTTP 200，檔案雜湊與發布版本一致；由首頁進入成功案例，顯示 8 個影片預覽，AI 報價影片實際播放進度達 22.578 秒，當時 1130px 視窗無水平溢出。
- 發布前已確認首頁兩支既有 Release 原片實際播放，以及 Demo 的手機排版、直式案例播放、單一播放、搜尋返回、文章目錄、指南階段與聯絡入口。

<a id="release-20261111-guide"></a>

## 2026-11-11｜AI 導入指南

- 新增四個導入階段：找到應用場景、評估資料與環境、規劃與驗證方案、導入與持續優化。
- 首頁與主導覽加入指南入口，新增四個 HPE 技術說明頁及四個訊達服務說明頁。
- 沿用既有文章與成功案例，工作情境標示為示意，保留原廠資料來源；原有服務、案例、聯絡與文章同步功能持續保留。
- PR 記錄的驗證：JavaScript 語法與 54 個 HTML 頁面的本機檔案連結檢查通過；指南所連文章與案例為已核准資料，Demo 已測試階段切換與頁面跳轉。

[PR #3](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/3) · 合併版本 [230739b](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/230739b585ba23ba8550690a659e5c97076111cf)

<a id="release-20261111-services"></a>

## 2026-11-11｜服務與案例架構調整

- 將應用情境的需求與規劃說明整合到企業 AI 應用、IT 架構整合、持續維運三個服務頁；舊入口導向首頁服務區。
- 成功案例頁集中呈現已核准的訊達客戶與自身導入案例，服務頁提供對應的相關案例。
- 案例沿用公開內容來源，來源撤下時不繼續顯示舊資料；material-13 因實際導入狀態待確認，暫不列入成功案例。
- 保留文章同步、首頁影片與聯絡資訊。
- PR 記錄的檢查：HTML 站內檔案參照、`git diff --check`、公開案例清單及對應連結。

[PR #2](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/2) · 合併版本 [1b5606c](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/1b5606c574dbb7a6ddda66c20206901b728bdd32)

<a id="release-20261110-contact"></a>

## 2026-11-10｜聯絡我們頁面更新

- 主區改為「方案諮詢」，「來電洽詢」與公司總機提供訊達電話 02-2501-5568 撥號入口。
- 加入訊達電腦與 HPE 台灣官網入口，以及服務據點與原廠聯絡方式；外部連結另開分頁。
- 手機版採單欄，保留原有頁首、頁尾與 HPE 產品資訊聲明。
- PR 記錄的驗證：撥號入口、官網與聯絡連結、相對資源路徑、`git diff --check` 與 JavaScript 語法。

[PR #1](https://github.com/Dimension-AI-Agent/dimension-hpe/pull/1) · 合併版本 [7c6dfe0](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/7c6dfe071f4a166fd11086d56b434180a4a25497)

<a id="release-20261110-library"></a>

## 2026-11-10｜文章分類、標籤與即時同步

- 增加可瀏覽的大／小分類、相關標籤與搜尋，文章提供站內閱讀與分類入口。
- 將原有靜態文章快照改為即時讀取既有公開網站資料，只顯示已核准項目；文章新增、更新或撤下會反映於本站。
- 加入 `sync-content.js`、`article-sync.js` 與共用文章閱讀入口。當時首頁、方案與案例尚未跟隨文章同步；案例同步於 11/11 加入。

分類提交：[cd23e4c](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/cd23e4c) · 即時同步：[5493b26](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/5493b26b83b8e683af459b3c94433b46bed61502)

<a id="release-20261109-content"></a>

## 2026-11-09｜應用情境重整與文章庫

- 移除合作方案入口，重新整理應用情境與案例。
- 收錄當時 35 筆已核准內容，加入站內閱讀、主題篩選與搜尋；此時仍是靜態快照，11/10 才改為即時同步。
- 原 README 同時記錄：智慧維修 AI Agent 的實際導入與對外公開範圍待確認；外部案例不視為訊達客戶實績。
- 當時 PCAI 原附圖因標誌與命名待確認而未納入。這是該版本的歷史狀態，後續文章素材依公開來源核准流程同步。
- 原 README 提醒 HPE 標誌、文案、影片、第三方圖文及匿名客戶案例的公開授權需另行確認；網站發布不等於相關品牌核准。

修改提交：[9417559](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/941755902ec17189453340ea0cdebee5699fcb1e)

<a id="release-20261109-publish"></a>

## 2026-11-09｜驗收網站發布與網址更新

- 發布訊達 × HPE 驗收網站，建立服務、成功案例、文章與聯絡等頁面，加入既有品牌與素材。
- 更新網站網址與儲存庫介紹，正式入口使用 `dimension-hpe` 的 GitHub Pages 網址。
- 首頁原始影片由儲存庫 Release 附件提供。

網站發布：[6294b8e](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/6294b8e) · 網址與介紹：[4cc9612](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/4cc9612) · [影片素材 Release](https://github.com/Dimension-AI-Agent/dimension-hpe/releases/tag/website-video-2026-11-09)

<a id="release-20261104-preview"></a>

## 2026-11-04｜初版預覽與行動版調整

- 建立驗收網站初版預覽、首頁樣式及基本互動：[8670b8c](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/8670b8c)。
- 改善手機導覽與閱讀性：[a1ef2b5](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/a1ef2b5)。
- 將 HPE 方案帶入首頁：[933fd23](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/933fd23)。
- 釐清虛擬化文章入口：[e6ce50b](https://github.com/Dimension-AI-Agent/dimension-hpe/commit/e6ce50b)。

## 後續如何維護

網站功能或視覺更新時，將新紀錄加在本文件最上方，並更新總覽；記下日期、修改內容、對應 PR／commit，以及實際完成的驗證。較長的設計規則與素材來源保留於各自文件，由版本紀錄連結。README 固定提供本文件入口，避免歷史更新再次散落。
