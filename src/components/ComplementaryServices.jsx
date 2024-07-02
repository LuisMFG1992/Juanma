import { complementary } from '../constants/services'
import complementaryServices from '../assets/complementaryServices.jpg'

const ComplementaryServices = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 px-6 py-12'>
      <div className='flex flex-col items-center gap-8'>
        <img
          src={complementaryServices}
          className='w-1/2 lg:w-full lg:max-w-lg'
        />
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-title font-medium text-primary'>
            COMPLIMENTARY SERVICES
          </h2>
          <p className='text-center text-paragraph leading-relaxed md:px-[15%]'>
            No matter whether the plant is located in Europe or in other
            markets, we provide a range of additional services to ensure the
            success of your PV projects:
          </p>
        </div>
      </div>
      <div className=' grid gap-8 px-6 md:grid-cols-2 xl:grid-cols-5'>
        {complementary.map((element) => (
          <div
            key={element.title}
            className={`${element.colSpan} flex flex-col gap-2`}
          >
            <h2 className='text-center text-subtitle font-medium text-primary xl:hidden'>
              {element.title}
            </h2>
            <h2 className='hidden min-h-20 text-center text-subtitle font-medium text-primary xl:block'>
              {element.title.split('\n').map((line, index) => (
                <span key={index} className='block'>
                  {line}
                </span>
              ))}
            </h2>
            <p className='text-center text-paragraph leading-relaxed'>
              {element.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComplementaryServices
