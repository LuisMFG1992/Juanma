import { complementary } from '../constants/services'
import complementaryServices from '../assets/complementaryServices.jpg'
import { useTranslation } from 'react-i18next'

const ComplementaryServices = () => {
  const { t } = useTranslation()

  const translatedChildren = t('services_complementaryServices_children', {
    returnObjects: true
  })

  return (
    <div className='flex flex-col items-center justify-center gap-8 px-2 py-12 sm:px-6'>
      <div className='flex flex-col items-center gap-8'>
        <div className='container mx-auto flex flex-col items-center justify-center md:flex-row'>
          <img
            src={complementaryServices}
            className='w-[250px] sm:mb-0 sm:w-[500px] md:w-[350px] lg:w-[550px]'
          />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-center text-title font-medium text-primary'>
            {t('services_complementaryServices_title')}
          </h2>
          <p className='text-center text-paragraph leading-relaxed md:px-[15%]'>
            {t('services_complementaryServices_paragraph')}
          </p>
        </div>
      </div>
      <div className='grid max-w-[1500px] gap-8 md:grid-cols-2'>
        {translatedChildren.map((element) => (
          <div
            key={element.id}
            className={`${element.colSpan} flex flex-col gap-2`}
          >
            <h2 className='text-center text-subtitle font-medium text-primary'>
              {element.title}
            </h2>
            <p className='text-center text-paragraph leading-relaxed '>
              {element.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComplementaryServices
