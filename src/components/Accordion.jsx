import { useState } from 'react'
import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import { TbPointFilled } from 'react-icons/tb'

const Accordion = ({ text = '', options = [] }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleState = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <div
      className='flex w-full max-w-[550px] cursor-pointer flex-col rounded-xl bg-primary p-4 text-white'
      onClick={toggleState}
    >
      <div className='flex w-full justify-between'>
        +Bio
        {collapsed ? <MdExpandMore size={30} /> : <MdExpandLess size={30} />}
      </div>
      <ul
        className={`overflow-hidden transition-all duration-300 ease-in-out ${collapsed ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}`}
      >
        <p>
          {text.split('\n').map((line, index) => (
            <span key={index} className='mb-4 block'>
              {line}
            </span>
          ))}
        </p>

        <br />
        {options.length !== 0 ? <p>Projects:</p> : ''}
        {options.map((option, idx) => (
          <li key={idx} className='flex items-center gap-2'>
            <TbPointFilled />
            {option}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accordion
