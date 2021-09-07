import Link from 'next/link'
import { Button } from "@chakra-ui/react"

export default function Post({ post }) {
    return (
        <div className='card'>
            <img src={post.frontmatter.cover_image} />
            <div className="post-date">Posted on {post.frontmatter.date}</div>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                <Button>
                        Read More
                </Button>
            </Link>
        </div>
    )
}
