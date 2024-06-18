import { howDoWeHelpYou } from '../constants/services'
import IconTitleText from './IconTitleText'

const Services = () => {
  return (
    <>
      <section className='body-font text-gray-600'>
        <div className='px-6 py-24'>
          <div className='mb-10 text-center'>
            <h1 className='title-font mb-4 text-title font-medium text-gray-900'>
              HOW DO WE HELP YOU
            </h1>
            <p className='text-gray-500s text-paragraph  xl:w-full '>
              Over 60% of projects do not pass the FID gate, and the 40% that do
              get built often lose 5-15% of their IRR.
            </p>
            <br />
            <p className='text-gray-500s mx-auto text-paragraph leading-relaxed lg:w-3/4 '>
              <span className='font-medium'>
                Solutions Born from Collaboration:{' '}
              </span>
              By aligning our expertise with your business goals, we transform
              energy projects into optimized, high-performing assets.
            </p>
            <div className='mt-6 flex justify-center'>
              <div className='inline-flex h-1 w-16 rounded-full bg-primary'></div>
            </div>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-8 '>
            {howDoWeHelpYou.map((option) => (
              <IconTitleText
                icon={option.icon}
                title={option.title}
                text={option.text}
                key={option.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
