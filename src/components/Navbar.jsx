import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { contactInfo, navLinks } from '../constants'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/index'
import useResize from '../Hooks/useResize'

const Navbar = () => {
  const size = useResize()

  const { isNavbarToggled, toggleState, SetIsNavbarToggled } =
    useContext(ThemeContext)

  useEffect(() => {
    if (size[0] > 768) SetIsNavbarToggled(false)
  }, [size, SetIsNavbarToggled])

  return (
    <div className='sticky top-0 z-10 w-full shadow-md'>
      <div className='bg-primary px-6 text-end text-sm text-light'>
        {contactInfo.phone} | {contactInfo.mail} | {contactInfo.address}
      </div>
      <nav className='border-b-1 border border-lightGray bg-white px-6'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src={logo} alt='' className='my-2 h-[55px]' />
              <span className='ml-3 text-xl font-semibold'>Name</span>
            </div>

            {/* Desktop */}
            <div className='hidden gap-8 md:flex'>
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
            </div>

            {/* Mobil */}
            <GiHamburgerMenu
              className='text-2xl md:hidden'
              onClick={() => toggleState(SetIsNavbarToggled)}
            />
          </div>
          {isNavbarToggled ? (
            <div className='flex flex-col items-center gap-4 pb-4'>
              {navLinks.map((link) => (
                <NavLink
                  onClick={() => toggleState(SetIsNavbarToggled)}
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
            </div>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
