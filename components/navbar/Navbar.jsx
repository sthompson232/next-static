import React from 'react'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'
import { pages } from './pages'

const Navbar = () => {
  return (
    <div>
      <div className="sm:hidden">
        <MobileNavbar />
      </div>
      <div className="bg-black h-20">
        <div className="flex items-center justify-end h-20">
            <div className="hidden sm:block">
              <div className="flex space-x-4 mx-12">
                {pages.map(page => (
                  <Link key={page.id} href={page.url} passHref>
                    <h4 className="text-white cursor-pointer">{page.name}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
