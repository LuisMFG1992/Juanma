import {
  AppButton,
  ComplementaryServices,
  HowWeWork,
  IconTitle
} from '../components'
import ContentImage from '../components/ContentImage'
import { whatWeDoBest } from '../constants/services'

import services1 from '../assets/services1.jpg'
import services2 from '../assets/services2.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { whatWeDoBestIcons } from '../constants/iconsRef'

const Services = () => {
  const { t } = useTranslation()

  const translatedChildren = t('services_whatWeDoBest_children', {
    returnObjects: true
  })

  return (
    <>
      <section className='flex w-full flex-col items-center justify-center p-2 py-6'>
        <div className='max-w-[1500px]'>
          <h1 className='mb-4 text-center text-title font-medium text-primary'>
            {t('services_whatWeDoBest_title')}
          </h1>
          <p className='mx-auto mb-4 text-center  text-paragraph leading-relaxed lg:w-2/3'>
            {t('services_whatWeDoBest_paragraph')}{' '}
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
            {translatedChildren.map((option) => (
              <IconTitle
                key={option.title}
                icon={whatWeDoBestIcons[option.icon]}
                title={option.title}
              />
            ))}
          </div>
        </div>
      </section>

      <ContentImage
        title={t('services_ourMainService_title')}
        text={t('services_ourMainService_paragraph')}
        image={services1}
      />

      <HowWeWork />

      <div className='bg-light'>
        <ComplementaryServices />
      </div>

      <ContentImage
        title={t('services_personalizedProcess_title')}
        text={t('services_personalizedProcess_paragraph')}
        image={services2}
        direction='left'
      />

      <section className='flex flex-col gap-6 py-12'>
        <h2 className='title-font list-disc text-center text-3xl font-medium text-primary sm:text-4xl'>
          {t('services_result_title')}
        </h2>

        <ul className='grid justify-center px-6 text-center text-paragraph'>
          <li>{t('services_result_firstElement')}</li>
          <li>{t('services_result_secondElement')}</li>
        </ul>
        <div className='flex justify-center px-6'>
          <Link to={'https://calendly.com/jmr-fidgate/'}>
            <AppButton text={t('services_result_button')} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
