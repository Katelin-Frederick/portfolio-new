
'use client'

import { Menu, X, } from 'lucide-react'
import { useState, } from 'react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navigationLinks = [
    {
      href: '/#landing',
      text: 'Home',
    },
    {
      href: '/#myWork',
      text: 'My Work',
    },
    {
      href: '/#aboutMe',
      text: 'About',
    },
    {
      href: '/#contact',
      text: 'Contact',
    }
  ]

  return (
    <nav className='flex justify-around items-center min-h-[8vh] bg-gray-800/90 border-b-6 border-gold-500 w-full fixed px-5 z-10'>
      <div className='uppercase tracking-[5px] text-[1em] md:text-xl transition ease-in'>
        <h4>
          <Link className='hover:text-gold-500 hover:scale-90 font-bold' href='/#landing'>Katelin Frederick</Link>
        </h4>
      </div>

      <button
        className='inline desktop-nav:hidden'
        onClick={() => {
          setMenuIsOpen(!menuIsOpen)
        }}
      >
        {menuIsOpen ? (
          <X size={32} />
        ) : (
          <Menu size={32} />
        )}
      </button>

      <ul className='hidden desktop-nav:flex justify-around w-[50%] lg:w-[40%]'>
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link className='hover:text-gold-500 transition ease-in' href={link.href}>{link.text}</Link>
          </li>
        ))}

        <li>
          <Link
            className='hover:text-gold-500 transition ease-in'
            href={'/Resume.pdf'}
            target='_blank'
          >
            Resume
          </Link>
        </li>
      </ul>

      {menuIsOpen && (
        <ul className='absolute right-0 h-[92vh] top-[8vh] desktop-nav:hidden flex flex-col items-center w-[50%] bg-gray-800/90'>
          {navigationLinks.map((link, index) => (
            <li key={index} className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'>
              <Link className='hover:text-gold-500 transition ease-in' href={link.href}>{link.text}</Link>
            </li>
          ))}

          <li className='w-full h-full flex justify-center items-center border-b-2 border-gray-100'>
            <Link
              className='hover:text-gold-500 transition ease-in'
              href={'/Resume.pdf'}
              target='_blank'
            >
              Resume
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar