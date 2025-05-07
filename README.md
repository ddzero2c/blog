# Ryder's Blog

$ dd if=/dev/brain of=/dev/blog

一個使用 Next.js 和 Markdown 建構的個人技術部落格，以 Neovim 為靈感的黑暗主題。

## 特色

- Next.js 靜態網站生成
- Markdown 文章支援
- 命令列搜尋 (⌘K)
- 自動部署到 GitHub Pages
- SEO 優化
- Neovim 風格的暗色主題
- 響應式設計

## 開始使用

1. 複製此儲存庫
2. 安裝依賴: `npm install`
3. 啟動開發伺服器: `npm run dev`
4. 在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000)

## 部署

此部落格使用 GitHub Actions 自動部署到 GitHub Pages。每當推送到 main 分支時，會自動構建並部署網站。

## 建立文章

文章以 Markdown 格式儲存在 `posts` 目錄中。每篇文章需包含前置元數據:

```markdown
---
title: '文章標題'
date: 'YYYY-MM-DD'
description: 'SEO 描述'
seo_title: 'SEO 標題'
og_title: '社交媒體分享標題'
---

文章內容...
```

檔名（不含 `.md` 副檔名）將成為文章的 URL slug。

## 構建

要構建生產版本，執行:

```bash
npm run build
```

這將在 `out` 目錄中生成靜態網站文件，可部署到任何靜態網站託管服務。

## 主要技術

- Next.js
- React
- Markdown (remark)
- GitHub Actions
- GitHub Pages