import { googleMapAddress } from '../constants'

const ContactWithMap = () => {
  return (
    <>
      <section className='body-font relative text-gray-600'>
        <div className='container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap'>
          <div className='relative flex h-60 w-full items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 sm:h-auto sm:w-auto md:w-1/2 lg:w-2/3'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              src={googleMapAddress}
            ></iframe>
            <div className='relative hidden flex-wrap rounded bg-white py-6 shadow-md sm:flex'>
              <div className='px-6 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-gray-900'>
                  ADDRESS
                </h2>
                <p className='mt-1'>
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                <h2 className='title-font text-xs font-semibold tracking-widest text-primary'>
                  EMAIL
                </h2>
                <a className='leading-relaxed text-primary'>
                  example@email.com
                </a>
                <h2 className='title-font mt-4 text-xs font-semibold tracking-widest text-primary'>
                  PHONE
                </h2>
                <p className='leading-relaxed'>123-456-7890</p>
              </div>
            </div>
          </div>
          <div className='mt-8 flex w-full flex-col bg-white md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3'>
            <h2 className='mb-1 text-subtitle font-medium text-primary'>
              {"Let's chat!"}
            </h2>
            <p className='mb-5 text-paragraph leading-relaxed text-gray-600'>
              For general inquiries or to start the conversation, please fill
              out this contact form and we{"'"}ll get back to you as soon as
              possible.
            </p>
            <div className='relative mb-4'>
              <label
                htmlFor='name'
                className='text-paragraph leading-7 text-gray-600'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-paragraph leading-7 text-gray-600'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-paragraph leading-7 text-gray-600'
              >
                Phone
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='email'
                className='text-paragraph leading-7 text-gray-600'
              >
                Subject
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200'
              />
            </div>
            <div className='relative mb-4'>
              <label
                htmlFor='message'
                className='text-paragraph leading-7 text-gray-600'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                className='h-32 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200'
              ></textarea>
            </div>
            <button className='rounded border-0 bg-primary px-6 py-2 text-lg text-white hover:opacity-80 focus:outline-none'>
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactWithMap
