import { useTranslation } from 'react-i18next'
import newImage from '../assets/new.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  const { t } = useTranslation()
  return (
    <Link
      to={'https://energiaestrategica.es/fidgate-ofrece-soluciones/'}
      className='flex h-[320px] w-[350px] flex-col gap-4 rounded-xl shadow-lg'
    >
      <img
        src={newImage}
        alt='news image'
        className='rounded-t-xl bg-blue-900 object-cover'
      />
      <p className='px-4 text-lg'>{t('home_news_title')}</p>
    </Link>
  )
}

export default Card
