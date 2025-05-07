import Layout from '../components/layout'

export default function About() {
  return (
    <Layout 
      title="About" 
      description="關於Ryder的技術部落格和專業背景 - 分享開發者工具、Neovim插件和程式技術心得"
    >
      <h1 className="post-title">About</h1>
      <div className="post-content">
        <h2>關於我</h2>
        <p>哈囉！我是Ryder，來自台灣的軟體開發者。我主要專注於開發者工具和提升開發體驗的工具。</p>
        
        <h2>專業興趣</h2>
        <p>我對以下領域特別感興趣：</p>
        <ul>
          <li>開發者體驗和工具鏈優化</li>
          <li>Neovim和tmux插件開發</li>
          <li>AI輔助編程工具</li>
          <li>區塊鏈技術和智能合約</li>
        </ul>
        
        <h2>開源項目</h2>
        <p>以下是我的一些主要開源項目：</p>
        
        <h3><a href="https://github.com/ddzero2c/tmux-easymotion" target="_blank">tmux-easymotion</a></h3>
        <p>為tmux開發的Vim風格easymotion插件，獨特之處在於支援在不同pane間跳轉。提供快速導航功能，讓終端操作更加高效。</p>
        
        <h3><a href="https://github.com/ddzero2c/aider.nvim" target="_blank">aider.nvim</a></h3>
        <p>將Aider AI編程助手整合到Neovim中的插件。支援多種AI模型，提供直覺的程式碼修改界面，支援diff和inline兩種編輯模式。</p>
        
        <h3><a href="https://github.com/ddzero2c/dot-files" target="_blank">dot-files</a></h3>
        <p>我的個人開發環境配置文件，包含bash、tmux、git等工具的配置，方便快速設置一致的開發環境。</p>
        
        <h2>關於這個部落格</h2>
        <p>這個部落格使用Next.js和Markdown構建，主要分享我在技術探索中的心得、開源項目和有趣的程式話題。</p>
        
        <h2>聯繫方式</h2>
        <p>你可以通過以下方式找到我：</p>
        <ul>
          <li><a href="https://github.com/ddzero2c" target="_blank">GitHub @ddzero2c</a></li>
        </ul>
      </div>
    </Layout>
  )
}