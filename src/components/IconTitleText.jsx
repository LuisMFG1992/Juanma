const IconTitleText = ({ icon, title, text }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full  bg-light text-primary'>
        {icon}
      </div>
      <div className='max-w-[900px] flex-grow'>
        <h2 className='mb-6 text-[1.4rem] font-medium text-primary'>{title}</h2>
        <p className='text-paragraph'>{text}</p>
      </div>
    </div>
  )
}

export default IconTitleText
