import { Link } from 'react-router-dom'
import AppButton from './AppButton'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className='bgHero py-28'>
      <div className='flex h-full flex-col items-center justify-center px-2 text-center sm:px-6 md:px-28 lg:px-52'>
        <h1 className='text-[3rem] font-medium text-white md:text-[4rem]'>
          {t('home_hero_title')}
        </h1>
        <p className='mb-8 max-w-[700px] text-paragraph leading-relaxed text-white'>
          {t('home_hero_paragraph')}
        </p>
        <Link to={'/services'} className='flex justify-center'>
          <AppButton text={t('home_hero_button')} hover={'lighter'} />
        </Link>
      </div>
    </section>
  )
}

export default Hero
