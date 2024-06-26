const Banner = ({ text = '' }) => {
  return (
    <div
      className={`flex h-[400px] w-full items-center justify-center bg-[url("https://dummyimage.com/100x100/cccccc/cccccc")] bg-cover bg-no-repeat`}
    >
      <h1 className='text-3xl'>{text}</h1>
    </div>
  )
}

export default Banner
