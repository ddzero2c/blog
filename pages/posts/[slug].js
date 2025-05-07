import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'

export default function Post({ postData }) {
  return (
    <Layout 
      title={postData.title} 
      description={postData.excerpt}
      ogImage={postData.ogImage}
    >
      <article className="post">
        <h1 className="post-title">{postData.title}</h1>
        <div className="post-meta">
          <time dateTime={postData.date}>
            {new Date(postData.date).toLocaleDateString('en-US')}
          </time>
        </div>
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