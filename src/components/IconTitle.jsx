const IconTitle = ({ icon, title }) => {
  return (
    <>
      <div className='flex flex-col gap-6  border-opacity-60 px-8 py-6 text-center    '>
        <div>
          <div className='inline-flex h-20 w-20 items-center justify-center rounded-full  bg-light text-primary'>
            {icon}
          </div>
        </div>
        <h2 className='mb-2 text-subtitle font-medium text-primary'>{title}</h2>
      </div>
    </>
  )
}

export default IconTitle
