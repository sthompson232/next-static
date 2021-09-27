import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import { motion } from 'framer-motion'
import { fadeInShakeX, pageFadeIn, staggerChildren } from '../utils/animations'
import FadeInOnScroll from '../components/FadeInOnScroll'


const Index = ({ posts }) => {
  return (
    <motion.div 
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={pageFadeIn} className="posts">

        {posts.map((post, index) => (
          <FadeInOnScroll key={index}>
            <Post post={post} />
          </FadeInOnScroll>
        ))}

      </motion.div>
    </motion.div>
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
