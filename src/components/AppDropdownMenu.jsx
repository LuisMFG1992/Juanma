import { IoMdArrowDropdown } from 'react-icons/io'
import useToggle from '../Hooks/useToggle'

const AppDropdownMenu = ({ callbackEnglish, callbackGerman }) => {
  const { state: showMenu, toggleState } = useToggle()

  return (
    <div className='relative'>
      <button
        className='flex cursor-pointer items-center'
        onClick={toggleState}
      >
        <p className='text-lg text-paragraph text-lightGray'>Languages</p>
        <IoMdArrowDropdown size={'1.3rem'} className='text-lightGray' />
      </button>
      {showMenu && (
        <div className='border-2-primary absolute left-0 flex w-full flex-col items-center border bg-white py-2 shadow-xl'>
          <ul>
            <li>
              <button onClick={callbackEnglish}>English</button>
            </li>
            <li>
              <button onClick={callbackGerman}>German</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default AppDropdownMenu
