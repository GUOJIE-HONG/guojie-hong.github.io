# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **主要讀者:招募人員與技術面試官。** 洪國傑（GuoJie）在職中尋找下一份工程師工作;對方通常是先收到履歷,再點履歷上印的網址進來,要判斷「這個人能不能勝任後端為主的全端職缺」。
- **次要讀者:潛在接案客戶。** 多半不懂技術,需要看得懂他能做什麼、知道怎麼聯絡。不能為了客戶犧牲求職訊息的清楚程度。
- 讀者以台灣的公司與客戶為主（由「繁體中文為主」的語言決定推論而來）。

## Product Purpose

個人介紹單頁（不再是作品集網站）。首要目標是讓招募方相信他是可以直接上線工作的後端為主全端工程師,並且拿到聯絡方式或履歷;次要目標是讓潛在接案客戶能找到他。

## Positioning

**後端為主的全端工程師。** 最新面試資料的職稱寫法是「ASP.NET / C# 後端工程師」。核心是 C#、ASP.NET Core（MVC 與 Web API）、SQL Server / MySQL;前端（Vue.js、Angular、jQuery）能協作與整合,是加分項而不是主打。網站、履歷、未來任何對外資料的說法都要一致。

**差異點:可驗證的開發流程。** TDD、模組化設計、SDD（Spec-Driven Development）,以及他持續研發的 AI Workflow 工具（agent 規範、skill、知識圖譜索引、MCP）。工作信條（本人原文）:「先理解流程、資料狀態與錯誤邊界,再進行設計與實作;重視資料一致、流程可靠、錯誤可追蹤與部署可控。」

## Operating Context

- 網站網址 https://guojie-hong.github.io/PortfolioWeb/ 印在履歷上,讀者通常是從履歷進來;網站也提供履歷下載,兩者會被互相對照。
- 部署在 GitHub Pages（靜態網站,沒有後端）。
- GitHub 帳號已從 `GUOJIE526` 改名為 `GUOJIE-HONG`（2026-09 確認）。舊網址 `guojie526.github.io` 與 `github.com/GUOJIE526` 都已失效（404）;舊版 `file/Resume.pdf` 與面試資料 PDF 上印的仍是舊網址,換新履歷時要一併更新。
- 語言:**繁體中文為主**,技術名詞保留英文原文（例如 ASP.NET Core、SignalR）。

## Capabilities and Constraints

**經歷（可公開）**
- 2025/08 起:哲煜科技股份有限公司 ASP.NET 後端工程師（現職,公司名稱可公開;不寫客戶或公司內部機密）。工作內容（本人面試資料原文,可使用）:
  - 多個不同類型後端專案:需求、資料、API、測試、部署與維護。
  - 負責 ASP.NET Core / .NET 後端流程架構與開發,累積需求理解、資料設計、API 實作及交付維護經驗。
  - 面對不同業務流程與既有 codebase,先釐清資料關係、模組邊界與錯誤情境,再控制修改範圍並補上必要測試。
  - 協助團隊導入 SDD、AI 輔助工具與知識圖譜索引,加速程式碼理解與協作開發效率。
- 2024.06–2024.11:資展國際（原資策會）全端工程師養成班 582 小時,擔任小組專案的專案總監。
- 2020/09–2024/06:正修科技大學 資訊工程學系。
- 2015/06–2024/10:日月光半導體 設備維修保養技術員（9 年 5 個月）。**轉職背景簡單帶過**:時間軸上保留,不當成賣點。本人面試資料的一句話寫法可用:「建立問題定位、紀錄追蹤與穩定性驗證的工作習慣,延伸到後端開發中的流程理解、錯誤邊界與驗證思維。」
- 語言:台語精通;英文聽說讀寫略懂。

**能力證明的方式（已確認）**
- 用「現職工作內容」的文字描述,加上「技術能力清單」。技術能力寫成「做過的事」,不綁定特定作品。
- 最新面試資料的核心能力（優先使用）:
  - 後端架構與資料處理:C#、ASP.NET Core MVC / Web API、RESTful API、EF Core、LINQ、Dapper;分層架構與 Repository / Service;MySQL、SQL Server、EF Core Migration;資料匯入匯出與資料一致性處理。
  - 排程、通知與前端協作:Hangfire、Firebase Admin;排程、推播、補償排程與時區轉換;jQuery、Bootstrap、Vue.js、Angular 後台整合。
  - AI Workflow 與可驗證開發:TDD、模組化設計、SDD、agent、skill、知識圖譜、MCP;規劃 agent 規範、建置 skill、執行 SDD 流程,持續研發 AI Workflow 工具套件。
- 以下是舊履歷與舊作品集 PDF 裡記錄、由他本人負責過的技術,可作為補充來源:
  - ASP.NET Core MVC 與 Web API、RESTful API 設計、MVC 三層式架構、程式碼重構
  - SQL Server 關聯式資料庫設計、Entity Framework Core（含 `AsNoTracking()` 查詢最佳化）、ADO.NET、LINQ
  - HangFire 定時排程、SignalR 搭配瀏覽器 Notification API 即時推播
  - Line Messaging API 串接
  - IIS 架設、SSL 憑證、IIS URL Rewrite Outbound Rules 隱藏 `Server` / `X-Powered-By` header
  - Azure App Service、Azure Static Web Apps、Azure SQL Database 部署,GitHub Actions CI/CD
  - SHA256 密碼雜湊
  - 前端:Vue.js（Pinia）、Nuxt.js（SEO、響應式）、jQuery、jQuery DataTables、AJAX、Leaflet 地圖、Bootstrap
  - Git / GitHub 版本控制與進度規劃;使用 AI 工具輔助開發與維運
- 團隊專案中其他成員負責的技術（例如 Python、OpenCV、YOLO、EasyOCR 車牌辨識）**不可**算成他個人的能力。

**不公開的資訊（硬限制）**
- 手機號碼:網站上、以及網站提供下載的任何檔案裡都不可出現。
- 一段未列入最新履歷的舊學歷:校名與科系不寫進任何公開檔案,包含本文件（本專案在 GitHub 上公開）。
- 居住地址（面試資料上的行政區也不放）。
- Instagram、Facebook 等個人社群帳號。

**公開的聯絡管道:只有 Email（hungkaojay@gmail.com）和 GitHub（https://github.com/GUOJIE-HONG）。**

**作品區:目前不放任何作品。** 舊作品太舊,書法網站（若莉寫字前台與後台）已撤下,沒有可實際點開的作品。

**待決定**
- 之後是否補新作品、作品區要不要預留位置:未決定。

**與本紀錄不一致的現況**
- 手機號碼與舊作品雖已從目前檔案移除,仍留在 GitHub 上的 git 歷史紀錄中。

## Brand Commitments

- 名字:洪國傑,英文 GuoJie。
- **必須保留**（本人確認）:大頭照、「GJ」字母標誌。
- 不需保留:首頁打字動畫、目前的紅色主色、Services 區。
- 舊簡報標語「經得起時間的考驗」:未確認是否沿用。

## Evidence on Hand

- 大頭照:`assets/PortfplioImg.jpg`（已確認可公開）。
- 履歷:`file/Resume.pdf` 是**舊版**,內含手機號碼、沒有寫現職,並附有家庭相關的自傳內容。本人會提供新版（不含手機、有寫現職）來取代;**本人決定在新版到位前暫時保留舊版下載**,這是「手機不公開」的唯一暫時例外。不可再引用舊版的手機或家庭資訊到網頁上。
- 作品集簡報 `file/project.pdf`、舊作品截圖、未使用的人物照片與若莉寫字 logo:已從網站刪除,不要再加回來。
- 最新面試資料:`D:\面試用\outputs\canva_interview_resume\output\pdf\洪國傑面試資料.pdf`（專案外,內含手機與住址,**不可放上網站或複製進專案**;只當文字來源）。現職工作內容與核心能力取自這份。
- 面試資料上的「9-10 年工作經驗」包含日月光年資,網站不以此當技術年資呈現。
- 沒有推薦語、客戶評價、數據成果、證照;不可捏造。

## Product Principles

1. **求職優先。** 每一塊內容都先回答面試官的問題:「他能不能勝任後端為主的全端職缺?」接案客戶的需求排在後面。
2. **只放能驗證的東西。** 沒有可點開的作品就不放作品;不編造專案、數據、評價或年資。
3. **隱私是硬限制。** 手機號碼、個人社群、未公開的學歷,在網頁和可下載檔案中都不能出現。
4. **定位一致。** 網站、履歷與任何對外資料都說同一件事:後端為主的全端工程師,差異點是可驗證的開發流程。
5. **轉職是脈絡,不是主角。** 設備保養的經歷只在時間軸中簡單交代。
