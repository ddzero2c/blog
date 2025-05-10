import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Post({ postData }) {
  const router = useRouter()
  const canonicalUrl = `https://blog.ddzero2c.dev${router.asPath}`

  return (
    <Layout
      title={postData.title}
      description={postData.description}
      ogImage={postData.ogImage}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              'headline': postData.title,
              'description': postData.description,
              'image': postData.ogImage,
              'datePublished': postData.date,
              'author': {
                '@type': 'Person',
                'name': 'Ryder'
              },
              'publisher': {
                '@type': 'Organization',
                'name': 'Ryder\'s Blog',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://blog.ddzero2c.dev/favicon.ico'
                }
              },
              'mainEntityOfPage': {
                '@type': 'WebPage',
                '@id': canonicalUrl
              }
            })
          }}
        />
      </Head>
      <article className="post">
        <header className="post-header">
          <h1 className="post-title">{postData.title}</h1>
          <div className="post-meta">
            {postData.date && (
              <time dateTime={postData.date}>
                {new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }).format(new Date(postData.date))}
              </time>
            )}
          </div>
        </header>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}