---
name: "訊達 × HPE｜C 整合工作桌"
description: "已選定 C 方向的白色與石灰決策工作桌；適用正式網站全站"
colors:
  red: "#a71320"
  red-hover: "#85101a"
  link: "#92101c"
  selected-text: "#8c1823"
  selected-surface: "#f5e9e9"
  ink: "#262323"
  body-ink: "#34302e"
  muted: "#57514e"
  meta: "#655b55"
  line: "#d3ceca"
  header-line: "#e4dfda"
  white: "#fff"
  stone: "#f4f3f0"
  row-hover: "#ebe6e2"
  guide-hover: "#f8f3f1"
  focus: "#007647"
  footer: "#282321"
  footer-text: "#e8e3df"
  legal-surface: "#f3f1ee"
  legal-text: "#514b47"
typography:
  display:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "clamp(34px, 4.3vw, 58px)"
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: "-0.035em"
  article-title:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "clamp(32px, 3.8vw, 48px)"
    fontWeight: 900
    lineHeight: 1.45
    letterSpacing: "-0.035em"
  homepage-section:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  article-body:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "16px"
    lineHeight: 1.95
  body:
    fontFamily: "Noto Sans TC, sans-serif"
    lineHeight: 1.8
  navigation:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "14px"
    fontWeight: 700
  meta:
    fontFamily: "Noto Sans TC, sans-serif"
    fontSize: "12px"
    lineHeight: 1.8
rounded:
  square: "0"
spacing:
  compact: "12px"
  action: "18px"
  inset: "20px"
  block: "24px"
  row: "25px"
  section-gap: "28px"
  section: "36px"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
  button-primary-hover:
    backgroundColor: "{colors.red-hover}"
    textColor: "{colors.white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
    rounded: "{rounded.square}"
    padding: "12px 18px"
  button-contact:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "10px 18px"
  video-choice-selected:
    backgroundColor: "{colors.selected-surface}"
    textColor: "{colors.selected-text}"
    rounded: "{rounded.square}"
    padding: "14px 10px"
  service-row:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    padding: "25px 0"
  service-row-hover:
    backgroundColor: "{colors.row-hover}"
    padding: "25px 10px"
  guide-step-selected:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    padding: "23px 20px"
  example-panel:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "22px"
---

# Design System: 訊達 × HPE｜C 整合工作桌

## Overview

**Creative North Star: "整合工作桌 / Enterprise Decision Brief"**

使用者於 2026-11-12 選定 C。白色與石灰表面、粗重中文標題、訊達紅色動作及對齊的細線，將影片、服務、案例和導入階段組織成可閱讀、可操作的企業決策工作桌。資訊密度依任務調整：首頁快速導覽、文章專注閱讀、指南清楚操作，沿用同一組色彩與排版語言。

訊達為主導品牌；HPE 使用既有獨立合作識別。內容承載在連續表面上，以文字層次與分隔線建立秩序。這份文件記錄目前採用的 C 系統；根目錄首頁與內頁為實作依據。A／B 原型及本機測試工具不屬於正式發布內容。

**Key Characteristics:**

- 白色畫布、石灰功能區與訊達紅色重點。
- 段落導覽、清楚列式服務和有條件顯示的文章目錄。
- 直角、細線與平實表面，原始影片優先。
- 同一套識別依閱讀或操作需求重排。

## Colors

調性為中性的白與暖石灰，搭配節制的訊達紅；精確值以前置 token 為準。

### Primary

- **訊達紅 `red`**：主要動作、選定階段、導覽提示和重點頂線。
- **深紅 `red-hover` / `link`**：實底動作懸停及正文連結。
- **淡紅 `selected-surface` / `selected-text`**：影片與子分類已選狀態。

### Neutral

- **正文墨色 `ink` / `body-ink`**：標題與長文。
- **石灰文字 `muted` / `meta`**：摘要、麵包屑與附註。
- **白色 `white`、石灰 `stone`**：頁面與服務、範例、聯絡電話等功能區。
- **分隔 `line` / `header-line`**：區分內容列及頁首。
- **互動底色 `row-hover` / `guide-hover`**：列式入口的滑鼠回應。
- **頁尾與聲明 tokens**：頁尾深底淺字，聲明以淡灰底承載原有文字。
- **焦點綠 `focus`**：淺色表面的鍵盤焦點，並非第二套主要品牌色。

**The Red Wayfinding Rule.** 紅色指出動作或所在位置；一般正文維持墨色與灰色。

## Typography

**Display Font / Body Font:** Noto Sans TC，後備為 sans-serif。由 Google Fonts 載入；離線時使用系統後備字體。

中文字重建立層次，標題緊湊，正文行距較寬。共用主標使用 `display`；文章另用 `article-title`。首頁服務區標題使用 `homepage-section`，指南入口主標為較大的 42px。不同任務保留實際所需的閱讀字級。

- **一般內容**：服務摘要與深讀列多為 15px；長文使用 `article-body`，小標 h2 為 27px、h3 為 21px。
- **文章入口**：資料庫標題為 26px、摘要為 15px；一般相關文章列標題為 24px。
- **說明與導覽**：主導覽使用 `navigation`；麵包屑、標籤與附註使用 `meta` 附近字級。
- **行長**：頁面導言通常限制在 65ch 附近；文章以較窄的閱讀容器承載完整內文。
- **手機**：740px 以下長文為 15px，h2 為 24px、h3 為 20px、文章標題為 31px；一般內頁導言主標為 32px。

## Layout

共用頁首桌面最小高度為 96px，水平內距為 4%；訊達標誌區與獨立 HPE 區保留間隔。一般內容容器為 `min(1180px, 90%)`；內頁導言可擴至 `min(1320px, 90%)`。列與面板以留白、頂線及明確對齊建立閱讀次序。

| 頁面 | 現有結構與閱讀順序 |
| --- | --- |
| 首頁 | 最大 1600px 的段落導覽＋主區；桌面左 rail 148px，影片主區搭配右側 230px 選擇與說明。影片先於服務，接著為石灰服務列及白色導入指南。 |
| 三項服務 / solutions | 連續白色導言、右側簡短提示、需求說明、情境及相關文章列，結尾為需求討論入口。 |
| 成功案例 | 導言後為案例列，桌面約 1.35fr／.65fr；主要敘事與延伸入口並排。資料仍由既有公開來源提供。 |
| 文章庫 | 最大 1460px 外框，225px 分類側欄與可收縮的結果區；搜尋在結果前，文章使用寬鬆的直列排版。側欄可捲動。 |
| 文章閱讀 | 無目錄時最大 850px；有目錄時為 190px＋最高 820px 正文、54px 間距；麵包屑跨欄，目錄及正文同列。 |
| AI 導入指南 | 左 275px 階段操作列、右內容工作區；說明、範例、問題、HPE／訊達角色、延伸閱讀與下一階段依序呈現。 |
| HPE / 訊達四階段 | 共用麵包屑、主標／階段問題、四階段列、正文、角色交叉連結、來源與返回指南；不重複疊放階段小標。 |
| 聯絡 | 桌面說明與電話約 1.35fr／.65fr，下方網站資源改成對齊的橫列；電話可直接撥號。 |

響應式沿用實際斷點：1180px 縮小頁首、rail 與欄距；1000px 切換選單、首頁 rail 成為置頂水平段落列，文章目錄移至正文前；800px 文章庫、內頁導言及聯絡主區單欄；740px 服務與案例直列、影片選擇置於播放器之後、指南成兩欄階段按鈕加單欄正文，聯絡資源直列；450px 文章分類側欄進一步成為單欄。

## Elevation & Depth

主要透過背景明度、細線及排版區分層次，內容面板保持平實。展開的手機主導覽使用 `0 12px 24px #0002` 陰影，提示浮於正文上方的選單。首頁原始影片保持完整比例，不以背板分割畫布。

## Shapes

按鈕、標籤、面板與列均以直角為主，細分隔線為 1px；紅色區塊頂線多為 2px，影片側欄頂線為 3px。影片固定 16:9，`object-fit: contain`，保留原片完整畫面。品牌標誌保持比例，不重畫、不染色，也不拼成共同 lockup。

## Components

### Buttons

紅底白字主要動作與透明紅框次要動作使用直角、粗體和清楚的文字／箭頭間隔。一般動作最小高度為 48px；頁首聯絡動作為 44px 起。一般實底或框線動作懸停轉為深紅底白字；首頁指南主要動作沿用紅底。鍵盤焦點為 3px 綠色外框、4px 位移；頁尾連結改用白色外框。

### Navigation

桌面主導覽水平排列；目前內頁以 `aria-current="page"`、紅色與底線呈現。手機選單由按鈕操作，支援 Escape 與外部點擊關閉。首頁段落 rail 以 `aria-current="location"` 跟隨捲動位置；段落連結仍可直接跳至對應區塊。

### Video selector

桌面為影片右側的文字按鈕列，已選按鈕為淡紅底深紅字，`aria-pressed` 與隱藏面板同步。HPE 產品介紹為預設第一支，訊達 × HPE 簡介為第二支。兩支均為既有 Release 原始 MP4，使用原生 controls、playsinline、preload none；使用者按播放才播放，切換時停止上一支。保留 noscript 與錯誤時的原始影片連結。

影片採用既有 Release `website-video-2026-11-09` 中的 `hpe-dl380a-gen12.mp4`、`dimension-hpe-introduction.mp4`；封面為 `assets/plates/` 對應的原片未裁切畫面。既有訊達 SVG 與 HPE PNG 同樣位於 `assets/plates/`。來源與素材使用方式見 `docs/media-sources.md`；設計選定不構成對外素材授權。

### Service rows / panels

首頁整列可點選，桌面依序為名稱、摘要、入口；石灰區的列在懸停時輕微增加水平內距及加深底色。指南、文章和聯絡內容依閱讀任務保留自己的列結構。範例與問題採石灰底、直角及明確內距，無額外卡片陰影。

### Library search / tags

搜尋欄最小高度 52px，紅色送出按鈕；分類按鈕與文章標籤維持方角與可辨識的選取狀態。分類側欄用 details／summary 展開，主分類與子分類分別有紅底及淡紅底選取狀態。搜尋詞、分類及標籤切換沿用既有 URL／返回鍵行為，不改資料分類規則。

### Case media previews

成功案例桌面為左側敘事、右側媒體的 1.15fr／.85fr 雙欄，間距 6%；740px 以下改為敘事、媒體、閱讀連結的單欄順序。預覽為 16:9 深色表面，使用原片未裁切畫面；直式及方形素材完整置於容器中。紅色播放按鈕至少 44px 高，點擊才建立原生播放器並載入影片。播放後保留原比例，桌面最高 460px、手機最高 480px，可使用原生全螢幕；播放其他案例時暫停先前影片。錯誤時提供原始影片連結。閱讀完整案例保持獨立入口；沒有影片時才使用案例圖片。封面來源記錄於 `assets/case-previews/provenance.json`。

### Article outline

僅當來源正文含至少兩個 h2 時顯示目錄；連結文字取自原有標題，缺少 ID 時補本頁錨點。桌面目錄固定於可視區並可捲動；窄螢幕移至正文前，details 可收合。短文章隱藏目錄並使用單欄。標題、正文、來源連結與文章素材仍由既有文章同步流程載入，目錄不改寫內容。

### Guide stages / partner pages

指南內文以階段主題、內容小標與待確認事項建立明確層級；角色標題為同層級。正文適度限制行長，段落分隔線與閱讀區對齊，手機以單欄呈現。

指南已選階段紅底白字，其他階段使用石灰底與細線；URL 保存階段，支援重整、返回鍵及上下階段按鈕。HPE 與訊達子頁均保留各自四階段列及目前位置，透過麵包屑、主標和導覽表達上下文。分別說明產品角色與訊達服務範圍，維持既有來源和聲明。

### Motion / accessibility

影片面板使用 0.25 秒亮度進場；服務列使用 0.25 秒內距／底色變化，箭頭使用 0.2 秒水平回應。`prefers-reduced-motion: reduce` 關閉動畫、轉場與平滑捲動。保留跳至主要內容、語意導覽、可見焦點及原生影片控制。文章圖片限制於容器寬度，長字串可斷行。

## Do's and Don'ts

### Do:

- **Do** 沿用白色／石灰畫布、訊達紅與列式對齊，依閱讀或操作任務安排頁面。
- **Do** 保持影片先於首頁服務，保留原始比例、明確選擇與手動播放。
- **Do** 使用既有獨立品牌標誌，保留產品來源、匿名案例邊界與完整 HPE 產品資訊聲明。
- **Do** 在桌面與手機確認段落導覽、文章目錄、選取狀態及鍵盤焦點。

### Don't:

- **Don't** 把封存的 A／B 候選、比較控制或舊首頁分色背板重新帶入目前根目錄頁面。
- **Don't** 因設計改版新增服務成果、案例授權或 HPE 已核准的宣稱。
- **Don't** 為了統一外觀移除文章內容、來源連結、資料同步或指南操作行為。
- **Don't** 將本機完成或設計選定描述為已正式部署。
