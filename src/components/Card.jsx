import { useTranslation } from 'react-i18next'
import newImage from '../assets/new.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  const { t } = useTranslation()
  return (
    <Link
      to={'https://energiaestrategica.es/fidgate-ofrece-soluciones/'}
      className='flex h-[320px] w-[300px] flex-col gap-4 rounded-xl shadow-lg'
    >
      <img
        src={newImage}
        alt='news image'
        className='rounded-t-xl bg-blue-900 object-cover'
      />
      <div className='flex  flex-col gap-2 px-4'>
        <p className='text-lg font-semibold text-primary'>
          {t('home_news_title')}
        </p>
        <p className=' text-lg'>{t('home_news_text')}</p>
        <div className='flex justify-between'>
          <p className='cursor-pointer text-lg text-primary underline'>
            {t('home_news_button')}
          </p>
          <p className='text-lg'>July 30, 2024</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
