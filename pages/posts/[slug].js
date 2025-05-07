import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Post({ postData }) {
  return (
    <Layout 
      title={postData.title} 
      description={postData.description}
      ogImage={postData.ogImage}
    >
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