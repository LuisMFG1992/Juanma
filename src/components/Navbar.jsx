import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMail } from 'react-icons/io5'
import { RiSmartphoneFill } from 'react-icons/ri'

import logo from '../assets/LogoFIDgate.svg'
import { NavLink } from 'react-router-dom'
import { contactInfo, navLinks } from '../constants'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/index'
import useResize from '../Hooks/useResize'
import AppDropdownMenu from './AppDropdownMenu'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const translatedNavLinks = t('navbar_links', { returnObjects: true })

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const size = useResize()

  const { isNavbarToggled, toggleState, SetIsNavbarToggled } =
    useContext(ThemeContext)

  useEffect(() => {
    if (size[0] > 768) SetIsNavbarToggled(false)
  }, [size, SetIsNavbarToggled])

  return (
    <div className='sticky top-0 z-20 w-full shadow-md'>
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

      <nav className='border-b-1 border border-lightGray bg-white px-2 md:px-6'>
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
                  {translatedNavLinks[link.label]}
                </NavLink>
              ))}
              <AppDropdownMenu
                callbackEnglish={() => changeLanguage('en')}
                callbackGerman={() => changeLanguage('de')}
              />
            </div>

            <div
              className='cursor-pointer py-4 sm:px-6 md:hidden'
              onClick={() => toggleState(SetIsNavbarToggled)}
            >
              <GiHamburgerMenu className='text-2xl text-primary  ' />
            </div>
          </div>
          {isNavbarToggled && (
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
                  {translatedNavLinks[link.label]}
                </NavLink>
              ))}
              <AppDropdownMenu
                callbackEnglish={() => changeLanguage('en')}
                callbackGerman={() => changeLanguage('de')}
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
