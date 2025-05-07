import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
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