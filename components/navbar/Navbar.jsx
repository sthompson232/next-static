import React from 'react'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'
import { pages } from './pages'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div>
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
      <div className="bg-black h-20">
        <div className="flex items-center justify-end h-20">
            <div className="hidden sm:block">
              <div className="flex space-x-8 mx-12">
                {pages.map(page => (
                  <motion.div
                    key={page.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={page.url} passHref>
                      <h4 className="text-white cursor-pointer">{page.name}</h4>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
