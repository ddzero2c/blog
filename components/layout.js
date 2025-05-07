import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Import the Search component dynamically to avoid server-side rendering issues
const Search = dynamic(() => import('./search'), { ssr: false })

export default function Layout({ children, home, title, description, ogImage }) {
  const isAboutPage = title === "About";
  const siteTitle = "Ryder"
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "$ dd if=/dev/brain of=/dev/blog"} />
        <meta property="og:title" content={title || siteTitle} />
        <meta property="og:description" content={description || "$ dd if=/dev/brain of=/dev/blog"} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="true" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <div className="container">
        <div className="sidebar">
          <Link href="/" className="logo">
            <div className="monogram">RW</div>
          </Link>
          
          <nav className="main-nav">
            <Link href="/about" className={`nav-link ${isAboutPage ? 'active' : ''}`}>
              About
            </Link>
            <Link href="/" className={`nav-link ${home && !isAboutPage ? 'active' : ''}`}>
              Posts
            </Link>
            <div className="search-wrapper">
              <Search />
            </div>
          </nav>
        </div>

        <main className="main-content">
          <div className="site-name">$ dd if=/dev/brain of=/dev/blog</div>
          
          {title && (
            <div className="site-header">
              <h1 className="site-title">{siteTitle}</h1>
            </div>
          )}
          
          {children}
          
          {!home && (
            <div className="back-link">
              <Link href="/">
                ← Back to all posts
              </Link>
            </div>
          )}
        </main>
      </div>
    </>
  )
}