---
name: "洪國傑 · 職涯路線圖"
description: "台灣捷運站名牌與路線圖語言：月台白地面、深藍灰站名牌、琥珀經歷線、深青驗證線。"
colors:
  amber: "#f2a51a"
  amber-hover: "#ffba3d"
  teal: "#177a7c"
  blue: "#2f66b3"
  brown: "#8c6a4f"
  platform: "#f3f4f0"
  platform-deep: "#e6e8e2"
  rule: "#cdd2ca"
  ink: "#18222a"
  ink-soft: "#45525b"
  sign: "#1b2730"
  sign-ink: "#f3f4f0"
  sign-soft: "#aebbc3"
  walked: "#a9b3ad"
  line-ink: "#ffffff"
typography:
  display:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(3.25rem, 1.6rem + 5.2vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "0.04em"
  display-next:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.6vw, 5.5rem)"
    fontWeight: 900
    lineHeight: 1.12
    letterSpacing: "0.04em"
  headline:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.6vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 1.24
    letterSpacing: "0.03em"
  title-lg:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1.375rem, 1.1rem + 1vw, 1.875rem)"
    fontWeight: 900
    lineHeight: 1.3
  title:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 900
    lineHeight: 1.35
  title-sm:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 900
    lineHeight: 1.4
  lead:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.625rem)"
    fontWeight: 700
    lineHeight: 1.6
  body:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  sign-en:
    fontFamily: "Overpass, Noto Sans TC, sans-serif"
    fontSize: "clamp(1.125rem, 0.9rem + 0.8vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"
  code:
    fontFamily: "Overpass, Noto Sans TC, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
    fontFeature: "\"tnum\""
  button:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  sign: "10px"
  pill: "999px"
  circle: "50%"
spacing:
  wrap: "1200px"
  gutter: "clamp(16px, 4vw, 40px)"
  topbar-h: "64px"
  station-gap: "clamp(72px, 9vw, 120px)"
  track-pad: "96px"
  spine-x: "30px"
  spur-x: "66px"
  line-w: "12px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.sign}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
    textColor: "{colors.sign}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.platform}"
  button-on-sign:
    backgroundColor: "transparent"
    textColor: "{colors.sign-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "48px"
  button-on-sign-hover:
    backgroundColor: "{colors.sign-ink}"
    textColor: "{colors.sign}"
  name-board:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.sign}"
    padding: "60px 48px 48px"
  name-board-next:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.sign}"
    padding: "76px 56px 56px"
  name-board-band:
    backgroundColor: "{colors.amber}"
    height: "14px"
  line-capsule:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.sign}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  gj-roundel:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.circle}"
    size: "128px"
  gj-roundel-sm:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.circle}"
    size: "36px"
  code-badge:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.sm}"
    padding: "0.42em 0.6em 0.3em"
  code-badge-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.line-ink}"
  code-badge-amber:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.sign}"
  code-badge-past:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.platform}"
  station-tag:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "2px 12px"
  station-tag-next:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.sign}"
    rounded: "{rounded.pill}"
    padding: "2px 12px"
  line-chip:
    textColor: "{colors.line-ink}"
    rounded: "{rounded.sm}"
    size: "32px"
  stop-past:
    backgroundColor: "{colors.sign}"
    rounded: "{rounded.circle}"
    size: "24px"
  stop-current:
    backgroundColor: "{colors.platform}"
    rounded: "{rounded.circle}"
    size: "30px"
  stop-current-spine:
    backgroundColor: "{colors.platform}"
    rounded: "{rounded.circle}"
    size: "34px"
  stop-next:
    backgroundColor: "{colors.platform}"
    rounded: "{rounded.circle}"
    size: "26px"
  stop-next-spine:
    backgroundColor: "{colors.platform}"
    rounded: "{rounded.circle}"
    size: "30px"
  info-panel:
    backgroundColor: "{colors.platform-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 24px 24px"
  topbar:
    backgroundColor: "{colors.platform}"
    textColor: "{colors.ink}"
    height: "{spacing.topbar-h}"
  minimap-train:
    backgroundColor: "{colors.amber}"
    rounded: "{rounded.sm}"
    width: "30px"
    height: "18px"
  route-menu-toggle:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-ink}"
    rounded: "{rounded.sm}"
    padding: "0 12px 0 14px"
    height: "44px"
  route-menu:
    backgroundColor: "{colors.sign}"
    textColor: "{colors.sign-soft}"
    rounded: "{rounded.sign}"
    padding: "14px 18px"
---

# Design System: 洪國傑 · 職涯路線圖

## Overview

**Creative North Star: "下一站：職涯路線圖"**

這套系統把一個人的職涯畫成一條捷運線，借用台灣捷運的三種物件：站名牌、路線圖、車廂到站顯示。月台白是地面，深藍灰看板是站名牌，琥珀色粗線是走過的經歷，深青色線是他工作時用的驗證流程。走過的站、本站、下一站各有固定畫法，讀者不看說明也知道他現在在哪、要往哪裡去。

密度是月台式的：留白多，內容排在欄位裡而不是卡片裡，一條垂直主線把所有段落串成同一條路線。字重很重（站名用 900），英文用 Overpass 大寫加字距排在中文下面，站號徽章讓每一站都能被指認。用色很節制：內文一律無彩，顏色只出現在路線、站點、徽章、看板與主要按鈕上。

方向合約確認拒絕的做法：以置中大頭照開場的個人頁、技能進度條、左右交錯的時間軸、卡片陰影與裝飾花紋。動態只有一段編排（載入時畫線、下一站燈號閃三下後常亮）和一個捲動回饋（迷你路線上的列車標記）。

**Key Characteristics:**
- 月台白地面加深藍灰站名牌，兩種明度撐起全部層次，沒有陰影。
- 一條琥珀主線貫穿全頁，每個段落都是這條線上的一站。
- 經歷線上的站點三態：走過實心、本站雙圈、下一站虛線空心。
- 中文粗黑站名在上，Overpass 英文大寫在下，站號徽章在站名前面。
- 路線只走水平與垂直，窄螢幕時轉成垂直，而不是縮小。
- 唯一的編排動畫只跑一次，減少動態時直接呈現完成狀態。

## Colors

低彩度的月台與看板中性色，加上幾條高辨識度的路線色；彩度只屬於路線與看板。

### Primary
- **經歷琥珀 Career Amber**（`amber` #f2a51a）：經歷主線（hero 路線條與垂直脊線）、站名牌頂端色帶、線名膠囊、「下一站」燈號標籤、主要按鈕、迷你路線目前站的圓點與列車標記、深色看板上的焦點框、文字選取反白、能力路網的 B 線。琥珀代表「他走的這條線」，也代表「往下一站前進」的動作。
- **亮琥珀 Lit Amber**（`amber-hover` #ffba3d）：只用在主要按鈕的 hover，像燈被點亮。

### Secondary
- **驗證深青 Verification Teal**（`teal` #177a7c）：驗證流程線（與主線同粗）、它的站點圈與 V 系列站號徽章、流程說明上方的 2px 線、站內資訊面板標題下的 2px 線、面板內連結的底線、月台上的鍵盤焦點框、能力路網的 A 線、迷你路線 hover 時的站點框。

### Tertiary
- **排程線藍 Schedule Blue**（`blue` #2f66b3）：只用於能力路網的 S 線（排程與前端協作）。
- **部署支線褐 Branch Brown**（`brown` #8c6a4f）：只用於能力路網的 D 線（部署與整合支線）。

### Neutral
- **月台白 Platform White**（`platform` #f3f4f0）：頁面地面、頂部導覽列、所有空心站點的填色、月台上框線按鈕 hover 時的字色、已過站站號徽章的字色。
- **月台深 Platform Deep**（`platform-deep` #e6e8e2）：站內資訊面板的底色、捲軸軌道。
- **月台分隔線 Platform Rule**（`rule` #cdd2ca）：導覽列下緣與公告清單底部的 1px 細線。
- **墨 Ink**（`ink` #18222a）：月台上的主要文字、月台上框線按鈕的框與 hover 底色、迷你路線的 3px 線與站點框、公告清單每列上方的 2px 線、轉乘站與交會站的粗圈。
- **淡墨 Ink Soft**（`ink-soft` #45525b）：月台上的次要文字（時間、描述、圖例、頁尾）、已過站支線上的空心圈、已過站站號徽章的底色。
- **站牌藍灰 Sign Slate**（`sign` #1b2730）：站名牌看板、站號徽章與 GJ 圓徽的底、走過的實心站點、本站雙圈、下一站虛線圈、手機版路線切換鈕與選單、`theme-color`。
- **站牌字白 Sign Letter**（`sign-ink` #f3f4f0）：看板上的主要文字、站號徽章與圓徽上的字。
- **站牌淡字 Sign Soft**（`sign-soft` #aebbc3）：看板上的英文站名、摘要與說明、看板上框線按鈕的框、手機選單裡的站名與線。
- **已過站灰 Walked Grey**（`walked` #a9b3ad）：已過站支線（6px 灰色側線），只當線使用。
- **路線字白 Line White**（`line-ink` #ffffff）：深青、藍、褐色徽章與路線字母方塊上的字。

### Named Rules
**The Lines-and-Signs Rule.** 月台上的文字只用 `ink` 與 `ink-soft`。顏色只出現在路線、站點、站號徽章、看板與主要按鈕上；看板上的琥珀字（例如「本站」標籤）屬於看板字，不算內文。

**The One Line, One Meaning Rule.** 每個路線色只代表一件事：琥珀是經歷主線與往下一站的動作，深青是驗證流程，藍與褐只屬於能力路網的線，灰只屬於已過站支線。新增顏色之前，先說出它是哪一條線。

**The Never-Alone Rule.** 琥珀線與灰色支線在月台白上的對比很低（約 1.9:1），所以它們永遠和深色站點、文字標示一起出現，不單獨承載意義，也不拿來當月台上的文字色。

## Typography

**Display Font:** Noto Sans TC（fallback：PingFang TC、Microsoft JhengHei、sans-serif）
**Body Font:** Noto Sans TC（載入 400 / 500 / 700 / 900）
**Label/Mono Font:** Overpass（fallback：Noto Sans TC、sans-serif；載入 500 / 700 / 800），用於所有 `lang="en"` 文字、站號徽章、GJ 圓徽、路線字母方塊與看板上的 Email。

**Character:** 中文用最重的 900 當站名，像站名牌上的黑體；英文用源自公路標誌字體的 Overpass，大寫、拉開字距，排在中文下面當第二語言。兩者疊起來就是一塊雙語站名牌。

### Hierarchy
- **Display**（900，clamp(3.25rem, 1.6rem + 5.2vw, 6rem)，1.05，字距 0.04em）：只用在站名牌上的姓名。≤719px 收為 clamp(2.75rem, 1.6rem + 6vw, 3.5rem)。
- **Display Next**（900，clamp(2.5rem, 1.4rem + 4.6vw, 5.5rem)，1.12，字距 0.04em）：GJ05「下一站：貴公司」看板的站名。
- **Headline**（900，clamp(2rem, 1.2rem + 2.6vw, 3.25rem)，1.24，字距 0.03em，`text-wrap: balance`）：脊線上每一站的標題（本站、驗證流程線、能力路網、已過站）。
- **Title Large**（900，clamp(1.375rem, 1.1rem + 1vw, 1.875rem)，1.3）：已過站的站名。
- **Title**（900，1.25rem，1.35）：路線條與驗證流程線上的站名。
- **Title Small**（900，1.0625rem，1.4）：能力路網的線名、站內資訊面板標題。
- **Lead**（700，clamp(1.25rem, 1rem + 0.8vw, 1.625rem)，1.6，最寬 17em，`text-wrap: pretty`）：本站的一句話導言。工作信條引文是同一角色、上限大一階，前後以「」包住。
- **Body**（400，1.0625rem，1.75）：一般內文，行寬 32–40em，`line-break: strict`；≤719px 改為 1rem。
- **Body Small**（400，0.9375rem，1.5–1.7）：站點說明、時間、能力路網的站名、圖例。時間與年份一律 `tabular-nums`。
- **Sign English**（Overpass 700，clamp(1.125rem, 0.9rem + 0.8vw, 1.5rem)，1.2，字距 0.16em，全大寫）：看板上的英文站名，顏色 `sign-soft`。GJ05 看板用小一階、字距 0.14em。
- **Code**（Overpass 800，0.875rem，1，字距 0.06em，`tabular-nums`）：站號徽章。路線條上的小站號為 0.8125rem、字距 0.08em。
- **Button**（700，1rem，1.2）：所有按鈕。
- **Label**（500，0.8125rem，1.3）：迷你路線的站名；目前站改為 700。

### Named Rules
**The Bilingual Sign Rule.** 中文站名在上、用 900；英文在下、用 Overpass 大寫加字距，顏色降一階。英文永遠不放在中文上方當小標。

**The Code-Before-Name Rule.** 有站號的站（GJ01–GJ05、V、V01–V05）把站號徽章放在站名同一行的最前面，不另起一行。沒有站號的段落（能力路網、已過站）只有站名，不補假站號。

## Layout

版心寬 `wrap`，左右各留 `gutter`。頂部導覽列 sticky，高 `topbar-h`；所有錨點的 `scroll-margin-top` 是導覽列高度加 24px，跳站時站名不會被遮住。

**第一屏。** 站名牌佔滿版心寬（桌機 1440×900 約佔上半），格線為「GJ 大圓徽｜姓名區｜大頭照」，摘要排在姓名區下方。站名牌下方 44px 接五欄等寬的路線條，寄信與下載履歷疊在 GJ05 下方（最寬 220px）。

**脊線。** hero 與 GJ05 看板之間的每一段都掛在一條垂直琥珀線上：線在版心內 `spine-x` 的位置，內容向右縮排 `track-pad`。每站上方留 `station-gap`，站頭與內容之間 44px。脊線在 GJ05 看板上方 112px 處轉成虛線，接到看板上緣的下一站虛線圈。驗證流程線從脊線上一個墨色交會圈向右分出，排成五等欄。已過站移到脊線右側 `spur-x` 的 6px 灰色支線上，由第一個已過站拉一段短橫線接回主線。

**欄位。** 本站段是 5:7 兩欄（導言｜公告清單），間距 56px；能力路網四等欄，間距 44px × 32px；已過站是「內容｜300px 站內資訊面板」，間距 64px。沒有卡片：分組靠欄位、2px 墨色橫線與留白。

**斷點。**
- ≤1023px：站名牌邊距收為 52px 36px 40px，大圓徽縮為 96px；本站段與已過站改單欄（資訊面板最寬 420px）；能力路網兩欄。
- ≤859px：迷你路線收成一顆看板色切換鈕加下拉選單，列車標記隱藏。
- ≤719px：脊線幾何收緊（`track-pad` 48px、`spine-x` 6px、`spur-x` 30px、`line-w` 10px），內文 1rem；站名牌改為「姓名｜88px 大頭照」加整寬摘要，大圓徽隱藏；路線條與驗證流程線轉為垂直；能力路網單欄；GJ05 看板上的按鈕各佔一整行。

### Named Rules
**The Single Spine Rule.** hero 與 GJ05 看板之間的每一段都掛在同一條垂直琥珀脊線上：站點圓心落在脊線上，並對齊站名第一行。要加新段落，就是在脊線上加一站。

**The Turn, Don't Shrink Rule.** 橫向路線（hero 路線條、驗證流程線）在 ≤719px 轉成垂直，站名靠左排在線的右側；不把五欄等比縮小，也不改成橫向捲動。

## Elevation & Depth

這是平面系統。深度只來自三種地面明度：月台白地面、月台深面板、深色站名牌。本站靠雙圈（7px 實框加一圈 3px 外框，間隔 3px）凸顯，不靠陰影；看板與地面之間靠明度反差分層。

### Shadow Vocabulary
- **浮動路線選單 Route Menu Overlay**（`box-shadow: 0 18px 40px -16px rgb(27 39 48 / 0.55)`）：只用在 ≤859px 從導覽列掉下來的路線選單，讓它浮在內容上。

### Named Rules
**The Flat Platform Rule.** 看板、面板、按鈕、徽章在任何狀態下都不加陰影、漸層或紋理。唯一的陰影屬於會蓋住內容的浮動選單。

## Shapes

形狀語言來自站牌與路線圖：圓角矩形的看板、正圓的站點、膠囊形的線名，以及方頭的粗線。

- **看板圓角**（`rounded.sign`，10px）：站名牌、手機路線選單。琥珀頂帶只圓上面兩角，貼齊看板上緣。
- **中圓角**（`rounded.md`，8px）：大頭照（4:5 裁切）、站內資訊面板。
- **小圓角**（`rounded.sm`，6px）：按鈕、站號徽章、路線字母方塊、切換鈕、列車標記、跳到主要內容連結。
- **最小圓角**（`rounded.xs`，4px）：路線條上的小站號、焦點框。
- **膠囊**（`rounded.pill`）：線名膠囊、「本站」與「下一站」標籤。
- **正圓**（`rounded.circle`）：所有站點、GJ 圓徽、交會圈。
- **線**：經歷主線與驗證線是方頭實心，寬 `line-w`；能力路網的線與已過站支線寬 6px（能力線兩端 3px 圓角）；迷你路線 3px。虛線節奏是 18 / 12。

### Named Rules
**The Three Stops Rule.** 經歷線上的站只有三種狀態：走過是 `sign` 實心、本站是雙圈、下一站是虛線空心。其他線上的站是該線顏色的空心圈；轉乘與交會一律是 `ink` 粗圈；移到已過站支線的站是 `ink-soft` 空心圈。沒有第四種狀態。

**The Dashed Future Rule.** 虛線只代表還沒發生的事：本站到下一站的路段（`line-w` 粗、18 / 12 節奏）與下一站的虛線圈。走過的路永遠是實線。

## Components

### Buttons
像月台上的操作面板：方正、厚實、字重 700，左側一個 20px 線條圖示（stroke 1.9、圓頭）。
- **Shape:** 小圓角（6px），最小高度 48px，左右內距 20px，2px 框，圖示與字間距 10px。
- **Primary:** 琥珀底、站牌藍灰字；只給寄信這個最重要的動作。
- **Hover / Focus:** hover 換成亮琥珀；按下時下移 1px。所有狀態轉換 0.2s，曲線 `cubic-bezier(0.16, 1, 0.3, 1)`。焦點框在月台上是 3px 深青、offset 3px，在看板上改成琥珀。
- **Ghost（月台）:** 透明底、2px 墨色框與墨色字；hover 整顆填墨色、字變月台白。
- **Ghost（看板上）:** 透明底、`sign-soft` 框、站牌字白；hover 填站牌字白、字變站牌藍灰。
- **配對:** 寄信（Primary）與下載履歷（Ghost）永遠一起出現；GitHub 只在 GJ05 看板上當第三顆 Ghost。≤719px 時看板上的按鈕各佔一整行。

### Chips
- **線名膠囊:** 站名牌上唯一的膠囊，琥珀底、站牌藍灰字，1.0625rem、700，內距 6px 16px（≤719px 為 4px 12px、0.875rem），寫職稱，像站牌上的路線名。
- **站點標籤:** 「本站」是站牌藍灰底配琥珀字；「下一站」是琥珀底配站牌藍灰字。0.875rem、700，內距 2px 12px。
- **站號徽章:** 小圓角，Overpass 800。四種底色：`sign`（經歷線上的站）、`teal`（驗證流程線）、`amber`（GJ05，只在看板上）、`ink-soft`（已過站）。
- **路線字母方塊:** 32px 正方、小圓角，底色是該線的顏色，Overpass 800、0.9375rem；字色白，琥珀線例外用站牌藍灰。

### Cards / Containers
系統裡沒有卡片，只有兩種看板與一種清單。
- **站名牌:** 站牌藍灰底、看板圓角（10px）、14px 琥珀頂帶。hero 內距 60px 48px 48px；GJ05 看板內距 76px 56px 56px，下一站的虛線圈騎在看板上緣。
- **站內資訊面板:** 月台深底、中圓角（8px）、內距 20px 24px 24px，標題下一條 2px 深青線；欄位名是淡墨 0.875rem、700；連結底線為深青；不加色帶、不用深色底。
- **公告清單:** 每列上方一條 2px 墨色線，整組底部一條 1px `rule` 線，像月台公告欄；沒有外框。
- **Shadow Strategy:** 全部不加陰影（見 Elevation & Depth）。

**The Name Board Rule.** 深色看板加 14px 琥珀頂帶只屬於站名牌：hero 的姓名看板與 GJ05 下一站看板。其他資訊面板一律用站內資訊面板的樣式（月台深底、2px 深青標題線、沒有色帶）。

### Navigation
像車廂上方的到站顯示。
- **導覽列:** sticky、高 64px、月台白底、下緣 1px `rule` 線。左側 36px GJ 小圓徽加姓名（1.125rem、900、字距 0.08em）。
- **迷你路線:** 右側六站排在一條 3px 墨色線上；站點是 14px 空心圈（3px 墨色框）；站名 0.8125rem、淡墨。hover 時站名轉墨色、站點框轉深青；目前站的站名加粗為 700，站點填琥珀。
- **列車標記:** 30 × 18px 的琥珀車廂，3px 站牌藍灰框、小圓角。捲動時以 0.55s、`cubic-bezier(0.16, 1, 0.3, 1)` 滑到目前段落的站點；減少動態時直接跳過去，不做滑動。
- **≤859px:** 迷你路線收成站牌藍灰切換鈕（最小高度 44px，顯示目前站名與琥珀箭頭，展開時箭頭 0.25s 轉 180°）。選單是站牌藍灰看板（10px 圓角、內距 14px 18px、最小寬度 220px），站名與垂直線用 `sign-soft`，每列至少 44px 高，目前站的站點框改琥珀；Esc 關閉並把焦點還給切換鈕，點選單外也會關閉。

### Signature：路線條與站點
第一屏的五站路線條，是整個系統的縮影。
- 五等欄，每站自己畫進站與出站的半段線，線距頂端 22px；本站到下一站那段改成 SVG 虛線。
- 站點依 The Three Stops Rule：走過 24px 實心（外圍 5px 月台白間隙）、本站 30px 雙圈、下一站 26px 虛線圈（4px 虛線框）。脊線上的本站放大為 34px，GJ05 看板上的下一站為 30px。
- 每站由上而下：小站號、站名（Title，站名是連結時 hover 出現琥珀底線）、時間與職稱（Body Small、淡墨）、狀態標籤。
- ≤719px 轉成垂直：線在左側，站號與站名排成同一行，虛線直接往下接到 GJ05。

**The One Authored Moment Rule.** 全頁只有一段編排動畫：載入時路線從 GJ01 畫到本站（每段 0.42s、每站間隔 0.36s，站點以 0.4s 從 0 放大），1.08s 時虛線接到下一站，1.9s 起「下一站」標籤以 steps(1, end) 閃三下（每下 0.56s，暗到 0.18）後常亮。完成狀態就是預設狀態，動畫只在 `prefers-reduced-motion: no-preference` 時由 JS 啟動；垂直版改用縱向展開。其他動態只有 0.2s 的狀態轉換與列車標記的滑動。

### Signature：GJ 圓徽
品牌必須保留的「GJ」字母標誌，畫成一個站號圓牌：站牌藍灰圓底、琥珀外框、Overpass 800 站牌字白。小尺寸 36px（3px 框）用在導覽列；大尺寸 128px（10px 框、2.75rem）放在站名牌左側，≤1023px 縮為 96px（8px 框、2rem），≤719px 隱藏。網站 favicon 用的是同一個圓徽。

### Signature：驗證流程線與能力路網
- **驗證流程線:** 從脊線上一個 34px 交會圈（7px 墨色框）分出的深青線，五站各是 24px 空心圈（5px 深青框），站名前加 V01–V05 深青站號，說明用 Body Small 淡墨。線的下方是一段以 2px 深青線起頭的流程說明。
- **能力路網:** 四條線各自一欄，線是 6px 直條，站點是 16px 空心圈（4px 線色框）。轉乘站放大成 20px、5px 墨色框並加粗為 700，代表可轉乘到驗證流程線；下方用同樣的墨色圈做圖例。線色依序是 B 琥珀、S 藍、A 深青、D 褐。
- **已過站支線:** 6px 灰色側線上的 20px 淡墨空心圈，站號徽章用淡墨底；站名用 Title Large，時間用淡墨 tabular-nums。

## Do's and Don'ts

### Do:
- **Do** 讓月台上的文字維持 `ink` / `ink-soft`，把顏色留給路線、站點、徽章、看板與主要按鈕。
- **Do** 所有主要路線用同一個粗細 `line-w`（桌機 12px，≤719px 10px）；走過的路用實線，往下一站用 18 / 12 虛線。
- **Do** 新增站點時從 The Three Stops Rule 挑一種畫法；本站永遠是雙圈。
- **Do** 次要資訊用站內資訊面板：`platform-deep` 底、8px 圓角、標題下 2px `teal` 線。
- **Do** 寄信（琥珀實心）與下載履歷（框線）成對出現；月台上的框線按鈕用 `ink`，看板上的用 `sign-soft`。
- **Do** 焦點框在月台上用 3px `teal`（offset 3px），在深色看板上改用 `amber`。
- **Do** 狀態轉換用 0.2s 與 `cubic-bezier(0.16, 1, 0.3, 1)`；任何編排動畫都讓完成狀態當預設，並尊重減少動態設定。
- **Do** 窄螢幕把橫向路線轉成垂直，保持站點、線與站名的對齊。

### Don't:
- **Don't** 在看板、面板或按鈕上加陰影、漸層或花紋；唯一的陰影屬於浮動的路線選單。
- **Don't** 把「深色底加琥珀頂帶」用在站名牌以外的面板。
- **Don't** 用路線色（琥珀、深青、藍、褐、灰）當月台上的內文顏色，或讓琥珀線、灰色支線單獨承載意義。
- **Don't** 畫水平與垂直以外的路線；真的需要轉折時只能是 45 度。
- **Don't** 用置中大頭照開場、技能進度條或百分比、左右交錯的時間軸。
- **Don't** 在站名上方加小標或眉標；站號放在站名前面，英文放在站名下面。
- **Don't** 在路線圖上使用真實的捷運站名；站名只能是職涯裡的站。
- **Don't** 拿掉大頭照或 GJ 圓徽；它們是必須保留的品牌資產。
