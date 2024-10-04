import { useTranslation } from 'react-i18next'
import OurTeam from '../components/OurTeam'

const About = () => {
  const { t } = useTranslation()
  return (
    <div>
      <section className='body-font flex flex-col items-center bg-light px-2 py-20 text-gray-600 sm:px-6'>
        <h1 className='pb-6 text-center text-title font-medium text-primary'>
          {t('about_mission_title')}
        </h1>
        <p className='text-center text-paragraph leading-relaxed md:w-2/3'>
          {t('about_mission_paragraph')}
        </p>
      </section>

      <section className='body-font text-gray-600'>
        <div className='mx-auto px-2 py-8 sm:px-6'>
          <OurTeam />
        </div>
      </section>
    </div>
  )
}

export default About
