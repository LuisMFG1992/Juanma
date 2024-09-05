import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Card = ({
  image = '',
  title = 'Title',
  company = 'Company name',
  link = '#',
  date = 'DDMMYYY'
}) => {
  const { t } = useTranslation()

  return (
    <Link
      to={link}
      className='flex h-[320px] w-[300px] flex-col rounded-xl shadow-lg'
    >
      <img
        src={image}
        alt='news image'
        className='h-[160px] w-[300px] rounded-t-xl bg-blue-900 object-cover'
      />
      <div className='flex flex-1 flex-col justify-between gap-2 p-4'>
        <p className='text-lg font-semibold text-primary'>{title}</p>
        <p className=' text-lg'>{company}</p>
        <div className='flex justify-between'>
          <p className='cursor-pointer text-lg text-primary underline'>
            {t('home_news_button')}
          </p>
          <p className='text-lg'>{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
