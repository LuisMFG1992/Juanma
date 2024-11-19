import { IoMdArrowDropdown } from 'react-icons/io'
import useToggle from '../Hooks/useToggle'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, useRef } from 'react'

const AppDropdownMenu = ({ callbackEnglish, callbackGerman }) => {
  const dropDownMenu = useRef(null)
  const { state: showMenu, toggleState } = useToggle()
  useEffect(() => {
    let handler = (e) => {
      if (dropDownMenu.current && !dropDownMenu.current.contains(e.target)) {
        toggleState(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [toggleState])

  const [selectedLanguage, setSelectedLanguage] = useState('de')

  const { t } = useTranslation()

  return (
    <section className='relative'>
      <button
        className='flex cursor-pointer items-center'
        onClick={() => toggleState()}
      >
        <p className='text-lg text-paragraph text-white'>
          {t('navbar_language')}
        </p>
        <IoMdArrowDropdown size={'1.3rem'} className='text-white' />
      </button>
      {showMenu && (
        <section
          ref={dropDownMenu}
          className='border-2-primary absolute left-0 top-8 flex w-full flex-col items-center border bg-white py-2 shadow-xl'
        >
          <ul>
            <li>
              <button
                onClick={() => {
                  callbackEnglish()
                  setSelectedLanguage('en')
                }}
                className={`text-paragraph ${selectedLanguage === 'en' ? 'font-semibold text-primary' : 'text-lightGray'}`}
              >
                {t('navbar_english')}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  callbackGerman()
                  setSelectedLanguage('de')
                }}
                className={`text-paragraph ${selectedLanguage !== 'en' ? 'font-semibold text-primary' : 'text-lightGray'}`}
              >
                {t('navbar_german')}
              </button>
            </li>
          </ul>
        </section>
      )}
    </section>
  )
}

export default AppDropdownMenu
