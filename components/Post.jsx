import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Post({ post }) {
    return (
        <div className='card'>
            <motion.img 
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                src={post.frontmatter.cover_image} 
            />
            <div className="post-date">Posted on {post.frontmatter.date}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }} scroll={false}>
                        Read More
            </Link>
        </div>
    )
}
