import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import { motion } from 'framer-motion'


const Index = ({ posts }) => {
  return (
    <motion.div 
      exit={{ opacity: 0 }} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
    >
      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
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
