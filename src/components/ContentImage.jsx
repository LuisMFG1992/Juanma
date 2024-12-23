const ContentImage = ({
  title = 'test',
  text = 'test',
  image = 'src="https://dummyimage.com/720x600"',
  direction = 'right'
}) => {
  return (
    <div>
      {direction === 'right' ? (
        <section className='body-font bg-light text-gray-600'>
          <div className='container mx-auto flex flex-col items-center px-2 py-12 sm:px-5 md:flex-row'>
            <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
              <h1 className='mb-4 text-title font-medium text-primary'>
                {title}
              </h1>
              <p className='text-paragraph leading-relaxed'>
                {text.split('\n').map((line, index) => (
                  <span key={index} className='mb-4 block'>
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className='w-[250px] sm:w-[500px] md:w-[350px] lg:w-[550px]'>
              <img
                className='rounded object-cover object-center'
                alt='hero'
                src={image}
              />
            </div>
          </div>
        </section>
      ) : (
        <section className='body-font bg-light text-gray-600'>
          <div className='container mx-auto flex flex-col items-center px-2 py-12 sm:px-5 md:flex-row'>
            <div className='mb-6 w-[250px] sm:mb-0 sm:w-[500px] md:w-[350px] lg:w-[550px]'>
              <img
                className='rounded object-cover object-center'
                alt='hero'
                src={image}
              />
            </div>
            <div className='flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
              <h1 className='title-font mb-4 text-3xl font-medium text-primary sm:text-4xl'>
                {title}
              </h1>
              <p className='text-paragraph leading-relaxed'>
                {text.split('\n').map((line, index) => (
                  <span key={index} className='mb-3 block'>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ContentImage
