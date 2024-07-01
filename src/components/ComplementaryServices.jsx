import { complementary } from '../constants/services'
import services1 from '../assets/services1.jpg'

const ComplementaryServices = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 px-6 py-12'>
      <div>
        <div className='w-1/2 lg:w-full lg:max-w-lg'>
          <img src={services1} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-title font-medium text-primary'>
            COMPLIMENTARY SERVICES
          </h2>
          <p className='text-center text-paragraph leading-relaxed'>
            No matter whether the plant is located in Europe or in other
            markets, we provide a range of additional services to ensure the
            success of your PV projects:
          </p>
        </div>
      </div>
      <div className='grid gap-4 px-6 md:grid-cols-2 xl:grid-cols-5'>
        {complementary.map((element) => (
          <div key={element.title} className={`${element.colSpan}`}>
            <h2 className='mb-2 text-center text-subtitle font-medium text-primary'>
              {element.title}
            </h2>
            <p className='mb-8 text-center text-paragraph leading-relaxed'>
              {element.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComplementaryServices
