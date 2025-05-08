import Layout from '../components/layout'

export default function About() {
  return (
    <Layout 
      title="About" 
      description="關於Ryder的技術部落格和專業背景 - 分享開發者工具、區塊鏈技術和程式心得"
    >
      <h1 className="post-title">About</h1>
      <div className="post-content">
        <h2>關於我</h2>
        <p>我是Ryder，台灣軟體工程師，目前專注在區塊鏈開發和開發者工具領域。平時喜歡研究提高開發效率的方法，對Neovim、tmux等工具有特別的興趣。</p>
        
        <h2>開源項目</h2>
        <h3><a href="https://github.com/ddzero2c/tmux-easymotion" target="_blank">tmux-easymotion</a></h3>
        <p>tmux版的easymotion插件，支援跨pane跳轉功能，讓tmux用戶能像使用Vim的easymotion一樣快速定位和切換。這個工具大幅提升了我自己的終端工作流效率，所以決定開源分享。</p>
        
        <h2>商業項目</h2>
        <h3><a href="https://fooday.app/zh-TW/about" target="_blank">Fooday</a></h3>
        <p>擔任主要開發者，負責設計和實現後端系統及區塊鏈功能。Fooday是一個結合AI與區塊鏈的餐廳評論平台，主要解決傳統評論平台的假評論問題和缺乏信任的痛點。</p>
        <p>我主要負責了區塊鏈系統的架構設計、智能合約開發，以及整合AI技術與後端API。整個專案嘗試通過技術手段重建用戶對於評論系統的信任，同時用區塊鏈技術實現激勵機制和資料透明化。</p>
        
        <h2>這個部落格</h2>
        <p>這裡主要分享我在開發過程中的心得，特別是關於區塊鏈技術、開發工具和實用技巧。不定期會寫些技術分析和項目實戰經驗。</p>
        
        <h2>聯繫方式</h2>
        <ul>
          <li><a href="https://github.com/ddzero2c" target="_blank">GitHub @ddzero2c</a></li>
        </ul>
      </div>
    </Layout>
  )
}
