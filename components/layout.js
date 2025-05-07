import Head from 'next/head'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Import the Search component dynamically to avoid server-side rendering issues
const Search = dynamic(() => import('./search'), { ssr: false })

export default function Layout({ children, home, title, description, ogImage }) {
  const siteTitle = "Ryder's blog"
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  
  return (
    <div className="container">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "$ dd if=/dev/brain of=/dev/blog"} />
        <meta property="og:title" content={title || siteTitle} />
        <meta property="og:description" content={description || "$ dd if=/dev/brain of=/dev/blog"} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
      </Head>

      <header className="header">
        <h1>
          <Link href="/">
            {siteTitle}
          </Link>
        </h1>
        <p className="site-description">$ dd if=/dev/brain of=/dev/blog</p>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Search />
        </nav>
      </header>

      <main>{children}</main>
      
      {!home && (
        <div className="back-link">
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}

      <footer className="footer">
        <p>© {new Date().getFullYear()} - Built with Next.js | <a href="https://github.com/ddzero2c" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      </footer>
    </div>
  )
}