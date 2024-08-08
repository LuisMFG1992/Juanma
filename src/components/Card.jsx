import { useTranslation } from 'react-i18next'
import newImage from '../assets/new.jpg'

const Card = () => {
  const { t } = useTranslation()
  return (
    <div className='flex h-[320px] w-[350px] flex-col gap-4 rounded-xl shadow-lg'>
      <img
        src={newImage}
        alt='news image'
        className='rounded-t-xl bg-blue-900 object-cover'
      />
      <p className='px-4 text-lg'>{t('home_news_title')}</p>
    </div>
  )
}

export default Card
