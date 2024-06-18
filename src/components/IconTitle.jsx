const IconTitle = ({ icon, title }) => {
  return (
    <>
      <div className='flex flex-col gap-6 border-l-2 border-gray-200 border-opacity-60 px-8 py-6 md:w-full lg:w-1/2 xl:w-1/4'>
        {icon}
        <h2 className='mb-2 text-subtitle font-medium text-primary'>{title}</h2>
      </div>
    </>
  )
}

export default IconTitle
