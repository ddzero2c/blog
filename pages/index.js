import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'Ryder\'s Blog',
              'url': 'https://blog.ddzero2c.dev',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://blog.ddzero2c.dev/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Blog',
              'name': 'Ryder\'s Blog',
              'url': 'https://blog.ddzero2c.dev',
              'description': '$ dd if=/dev/brain of=/dev/blog',
              'author': {
                '@type': 'Person',
                'name': 'Ryder'
              }
            })
          }}
        />
      </Head>
      <section>
        <ul className="post-list">
          {allPostsData.map(({ slug, date, title }) => (
            <li className="post-item" key={slug}>
              <div className="post-title-wrapper">
                <h2 className="post-title">
                  <Link href={`/posts/${slug}`}>
                    {title}
                  </Link>
                </h2>
              </div>
              <div className="post-meta">
                {date && (
                  <time dateTime={date}>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }).format(new Date(date))}
                  </time>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}