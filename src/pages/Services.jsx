import { Banner } from '../components'

const Services = () => {
  return (
    <>
      <Banner />
      <section className='body-font text-gray-600'>
        <div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
          <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
            <img
              className='rounded object-cover object-center'
              alt='hero'
              src='https://dummyimage.com/720x600'
            />
          </div>
          <div className='flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
            <h1 className='title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl'>
              Before they sold out
              <br className='hidden lg:inline-block' />
              readymade gluten
            </h1>
            <p className='mb-8 leading-relaxed'>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex rounded border-0 bg-primary px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none'>
                Button
              </button>
              <button className='ml-4 inline-flex rounded border-0 bg-gray-100 px-6 py-2 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none'>
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
