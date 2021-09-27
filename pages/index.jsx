import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'
import { motion } from 'framer-motion'

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const Index = ({ posts }) => {
  return (
    <motion.div 
      exit={{ opacity: 0 }} 
      initial='initial'
      animate='animate'
    >
      <motion.div variant={stagger} className="posts">
        {posts.map((post, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Post post={post} />
          </motion.div>
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
