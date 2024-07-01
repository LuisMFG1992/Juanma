import { useEffect, useState } from 'react'
import useResize from '../Hooks/useResize'

const IconTitle = ({ icon = '', title = '' }) => {
  const [xlScreen, setXlScreen] = useState(false)
  const size = useResize()

  useEffect(() => {
    size[0] >= 1280 ? setXlScreen(true) : setXlScreen(false)
  }, [size, setXlScreen])
  return (
    <>
      <div className='flex flex-col gap-6 border-opacity-60 py-6 text-center'>
        <div>
          <div className='inline-flex h-20 w-20 items-center justify-center rounded-full bg-light text-primary'>
            {icon}
          </div>
        </div>

        {xlScreen ? (
          <h2 className='mb-2 text-subtitle font-medium text-primary'>
            {title.split('\n').map((line, index) => (
              <span key={index} className='block'>
                {line}
              </span>
            ))}
          </h2>
        ) : (
          <h2 className='mb-2 text-subtitle font-medium text-primary xl:max-w-[250px]'>
            {title}
          </h2>
        )}
      </div>
    </>
  )
}

export default IconTitle
