import { Link } from 'react-router-dom'
import AppButton from './AppButton'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation()

  return (
    <section className='bgHero py-28'>
      <div className='flex h-full flex-col items-center justify-center px-6 text-center sm:px-20 md:px-28 lg:px-52'>
        <h1 className='text-[3rem] font-medium text-white md:text-[4rem]'>
          {t('heroTitle')}
        </h1>
        <p className='mb-8 text-paragraph leading-relaxed text-white'>
          {t('heroParagraph')}
        </p>
        <Link to={'/services'} className='flex justify-center'>
          <AppButton text={t('heroButton')} hover={'lighter'} />
        </Link>
      </div>
    </section>
  )
}

export default Hero
