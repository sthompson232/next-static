import React from 'react'
import MobileNavbar from './MobileNavbar'
import Link from 'next/link'


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
                <Link href='/' passHref>
                    <h3 className="text-white cursor-pointer">Static blog</h3>
                </Link>
                <Link href='/contact' passHref>
                    <h3 className="text-white cursor-pointer">Conact page</h3>
                </Link>
                <Link href='/bio' passHref>
                    <h3 className="text-white cursor-pointer">Bio page</h3>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
