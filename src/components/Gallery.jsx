const Gallery = () => {
  return (
    <>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto flex flex-wrap px-5 py-24'>
          <div className='mb-20 flex w-full flex-wrap'>
            <h1 className='text-title mb-4 font-medium text-gray-900 lg:mb-0 lg:w-1/3'>
              Master Cleanse Reliac Heirloom
            </h1>
            <p className='text-paragraph mx-auto leading-relaxed lg:w-2/3 lg:pl-6'>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              {"haven't"} heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className='-m-1 flex flex-wrap md:-m-2'>
            <div className='flex w-1/2 flex-wrap'>
              <div className='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/500x300'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/501x301'
                />
              </div>
              <div className='w-full p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/600x360'
                />
              </div>
            </div>
            <div className='flex w-1/2 flex-wrap'>
              <div className='w-full p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/601x361'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/502x302'
                />
              </div>
              <div className='w-1/2 p-1 md:p-2'>
                <img
                  alt='gallery'
                  className='block h-full w-full object-cover object-center'
                  src='https://dummyimage.com/503x303'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
