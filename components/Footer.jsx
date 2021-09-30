import React from 'react'
import { pages } from './navbar/pages'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Footer = () => {
    return (
        <div className="bg-black h-20">
            <div className="flex items-center justify-between h-20 mx-12">
                <div className="flex space-x-8">
                    {pages.map(page => (
                        <motion.div
                            key={page.id}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={page.url} passHref>
                                <p className="text-white cursor-pointer">{page.name}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <p className="text-white cursor-pointer"><a href="mailto:email@email.com">email@email.com</a></p>
                </motion.div>
            </div>
        </div>
    )
}

export default Footer
