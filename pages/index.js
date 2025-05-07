import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Layout from '../components/layout'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <ul className="post-list">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <li className="post-item" key={slug}>
              <h3 className="post-title">
                <Link href={`/posts/${slug}`}>
                  {title}
                </Link>
              </h3>
              <div className="post-meta">
                <time dateTime={date}>{new Date(date).toLocaleDateString('zh-TW')}</time>
              </div>
              {excerpt && <p>{excerpt}</p>}
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