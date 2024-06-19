const IconTitleText = ({ icon, title, text }) => {
  return (
    <div className='flex flex-col items-center gap-4 text-center'>
      <div className='inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full  bg-light text-primary'>
        {icon}
      </div>
      <div className='max-w-[900px] flex-grow'>
        <h2 className='mb-6 text-[1.4rem] font-medium text-primary sm:hidden lg:block xl:hidden'>
          {title.split('\n').map((line, index) => (
            <span key={index} className='mb-4 block'>
              {line}
            </span>
          ))}
        </h2>
        <h2 className='mb-6 hidden text-[1.4rem] font-medium text-primary sm:block lg:hidden xl:block'>
          {title}
        </h2>

        <p className='text-paragraph'>
          {text.split('\n').map((line, index) => (
            <span key={index} className='mb-4 block'>
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default IconTitleText
