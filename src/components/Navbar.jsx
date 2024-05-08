import {
  Navbar as Nav,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle
} from 'flowbite-react'

import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { contactInfo, navLinks } from '../constants'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-10 w-full shadow-md'>
      <div className='bg-primary px-6 text-end text-sm text-light'>
        {contactInfo.phone} | {contactInfo.mail} | {contactInfo.address}
      </div>
      <Nav
        fluid
        rounded
        class='border-b-1 border border-lightGray bg-white px-6'
      >
        <NavbarBrand href='https://flowbite-react.com'>
          <img src={logo} alt='' className='my-2 h-[55px]' />
          <span className='ml-3 text-xl font-semibold'>Name</span>
        </NavbarBrand>
        <NavbarToggle class='md:hidden' />
        <NavbarCollapse className='py-5 text-center '>
          {navLinks.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              className={({ isActive }) =>
                isActive
                  ? 'text-lg font-bold text-primary'
                  : 'text-lg text-lightGray'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </NavbarCollapse>
      </Nav>
    </div>
  )
}

export default Navbar
