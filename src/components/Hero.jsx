import { Link } from 'react-router-dom'
import AppButton from './AppButton'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className='bgHero py-28'>
      <div className='flex h-full flex-col items-center justify-center px-2 text-center sm:px-6 md:px-28 lg:px-52'>
        <h1 className='mb-8 text-[1.8rem] font-medium text-white md:text-[3rem]'>
          {t('home_hero_title')}
        </h1>
        {/* <p className='mb-8 max-w-[700px] text-paragraph leading-relaxed text-white'>
          {t('home_hero_paragraph')}
        </p> */}
        <div className='flex flex-col justify-center gap-4 md:flex-row'>
          <Link to={'/contact'}>
            <AppButton
              text={t('home_hero_button')}
              hover={'lighter'}
              textColor='primary'
              bgColor='lightGreen'
              className={'font-bold brightness-125'}
            />
          </Link>
          <Link to={'/services'}>
            <AppButton
              text={t('home_hero_button2')}
              hover={'lighter'}
              textColor='white'
              className={'bg-primary font-semibold brightness-125'}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
