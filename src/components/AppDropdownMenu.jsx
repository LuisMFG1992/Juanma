import { IoMdArrowDropdown } from 'react-icons/io'
import useToggle from '../Hooks/useToggle'
import { useTranslation } from 'react-i18next'

const AppDropdownMenu = ({ callbackEnglish, callbackGerman }) => {
  const { state: showMenu, toggleState } = useToggle()

  const { t } = useTranslation()

  return (
    <div className='relative'>
      <button
        className='flex cursor-pointer items-center'
        onClick={toggleState}
      >
        <p className='text-lg text-paragraph text-lightGray'>
          {t('navbar_language')}
        </p>
        <IoMdArrowDropdown size={'1.3rem'} className='text-lightGray' />
      </button>
      {showMenu && (
        <div className='border-2-primary absolute left-0 top-8 flex w-full flex-col items-center border bg-white py-2 shadow-xl'>
          <ul>
            <li>
              <button
                onClick={callbackEnglish}
                className='text-paragraph text-lightGray'
              >
                {t('navbar_english')}
              </button>
            </li>
            <li>
              <button
                onClick={callbackGerman}
                className='text-paragraph text-lightGray'
              >
                {t('navbar_german')}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default AppDropdownMenu
