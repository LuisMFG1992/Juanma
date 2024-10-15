import Card from './Card'
import { useTranslation } from 'react-i18next'
import { newsImages } from '@/constants'

const News = () => {
  const { t } = useTranslation()

  const news = t('home_news_children', {
    returnObjects: true
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-12'>
      <p className='text-center text-subtitle font-semibold text-primary'>
        {t('home_news_title')}
      </p>
      <div className='flex flex-col gap-8 md:flex-row'>
        {news.map((element) => (
          <Card
            key={element.id}
            image={newsImages[element.image]}
            title={element.title}
            company={element.company}
            link={element.link}
            date={element.date}
          />
        ))}
      </div>
    </div>
  )
}

export default News
