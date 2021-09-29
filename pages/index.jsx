import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import FadeInOnScroll from '../components/utils/FadeInOnScroll'
import AnimationWrapper from '../components/utils/AnimationWrapper'


const Index = ({ posts }) => {
  return (
    <AnimationWrapper>
      <div className='posts'>
        {posts.map((post, index) => (
          <FadeInOnScroll key={index}>
              <Post post={post} />
          </FadeInOnScroll>
        ))}
      </div>
    </AnimationWrapper>
  )
}

export async function getStaticProps() {
  // GET FILES FROM THE POSTS DIRECTORY
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename),'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    }
  }
}

export default Index
