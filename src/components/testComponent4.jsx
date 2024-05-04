const testComponent4 = () => {
  return (
    <>
      <section className='body-font relative text-gray-600'>
        <div className='container mx-auto flex flex-wrap px-5 py-24 sm:flex-nowrap'>
          <div className='relative flex items-end justify-start overflow-hidden rounded-lg bg-gray-300 p-10 sm:mr-10 md:w-1/2 lg:w-2/3'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              title='map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310847.3324236927!2d13.094416267945796!3d52.50638427292411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2snl!4v1714852729633!5m2!1sen!2snl'
              // style='filter: grayscale(1) contrast(1.2) opacity(0.4);'
            ></iframe>
            <div className='relative flex flex-wrap rounded bg-white py-6 shadow-md'>
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
            <h2 className='title-font mb-1 text-lg font-medium text-primary'>
              {"Let's talk!"}
            </h2>
            <p className='mb-5 leading-relaxed text-gray-600'>
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className='relative mb-4'>
              <label htmlFor='name' className='text-sm leading-7 text-gray-600'>
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
                className='text-sm leading-7 text-gray-600'
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
                htmlFor='message'
                className='text-sm leading-7 text-gray-600'
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
              Button
            </button>
            <p className='mt-3 text-xs text-gray-500'>
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default testComponent4
