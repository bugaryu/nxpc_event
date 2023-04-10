# nxpc_event
NxPC.Labのイベント用のWebサイト

イベントごとに新しいブランチを作成し、完成後にmasterにマージする

## 基本構成
- About     : NxPCの説明
- Info      : 開催日時や配信リンク
- Performers: 出演者情報

### 使用ライブラリ
- Bootstrap
- JQuery

## ブランチ
- master：マスター
- single_page
  - Oddenからの派生
  - SPA（１枚ページでスクロールするように修正）
  - ほぼ不要ブランチ
- yataisaikai
  - Bootstrap（CSSフレームワーク）を導入してレスポンシブ対応
  - JQueryを導入してJS軽量化
- genen
  - モバイルのコンテンツ幅を調整
  - スクロールアニメーション追加
  - BootstrapをCDNからダウンロード版に変更
- circus
  - バックグラウンドでの音声再生
  - Performers の非表示（表示する場合は以下の `<div class="d-none">` を削除
https://github.com/bugaryu/nxpc_event/blob/3a3e1d810f144c9dc31847fcfce7b472da958fd3/index.html#L161-L197
  
## タグ
各イベント用のWebが完成した後、リリースタグを作成

ex) `vol62_Circus_20230326`
