import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInX, pageFadeIn, staggerChildren } from '../../utils/animations'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <motion.div variants={pageFadeIn}>
        <motion.div variants={staggerChildren}>
          <motion.div variants={fadeInX}>
            <Link href='/'>
              <a className='btn btn-back'>Go Back</a>
            </Link>
          </motion.div>
        <div className='card card-page'>
          <motion.h1 variants={fadeInX} className='post-title'>{title}</motion.h1>
          <motion.div variants={fadeInX} className='post-date'>Posted on {date}</motion.div>
          <motion.img 
            variants={fadeInX}
            src={cover_image}
          />
          <div className='post-body'>
            <motion.div variants={fadeInX} dangerouslySetInnerHTML={{ __html: marked(content) }}></motion.div>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
        'utf-8'
    )
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}