import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMail } from 'react-icons/io5'
import { RiSmartphoneFill } from 'react-icons/ri'

import logo from '../assets/LogoFIDgate.svg'
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
      <div className='flex items-center justify-center gap-2 bg-primary py-1 text-sm text-light sm:flex-row sm:justify-end sm:gap-6 sm:px-6 sm:py-3 sm:text-end '>
        <a
          href={`tel:${contactInfo.phone}`}
          className='text-md flex items-center gap-1 sm:text-paragraph'
        >
          <RiSmartphoneFill />
          {contactInfo.phone}
        </a>
        <a
          href={`mailto:${contactInfo.mail}`}
          className='text-md flex items-center gap-1 sm:text-paragraph'
        >
          <IoMail />
          {contactInfo.mail}
        </a>
      </div>
      <nav className='border-b-1 border border-lightGray bg-white px-6'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <NavLink to={'/'}>
              <div className='flex flex-col items-center'>
                <img src={logo} alt='' className='my-2 h-[55px] sm:h-[60px]' />
              </div>
            </NavLink>

            <div className='hidden gap-8 md:flex'>
              {navLinks.map((link) => (
                <NavLink
                  key={link.url}
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-lg text-paragraph font-bold text-primary'
                      : 'text-lg text-paragraph text-lightGray '
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div
              className='cursor-pointer p-4 md:hidden'
              onClick={() => toggleState(SetIsNavbarToggled)}
            >
              <GiHamburgerMenu className='text-2xl text-primary  ' />
            </div>
          </div>
          {isNavbarToggled ? (
            <div className='flex flex-col items-center pb-4'>
              {navLinks.map((link) => (
                <NavLink
                  onClick={() => toggleState(SetIsNavbarToggled)}
                  key={link.url}
                  to={link.url}
                  className={({ isActive }) =>
                    isActive
                      ? 'w-full py-2 text-center text-lg text-paragraph font-bold text-primary '
                      : 'w-full py-2 text-center text-lg text-paragraph text-lightGray '
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
