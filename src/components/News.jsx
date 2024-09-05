import Card from './Card'
import new1 from '../assets/new.jpg'
import new2 from '../assets/new2.jpg'

const news = [
  {
    id: 1,
    image: new1,
    title: 'Technical and financial optimization.',
    company: 'Energía Estratégica',
    link: 'https://energiaestrategica.es/fidgate-ofrece-soluciones/',
    date: '30/07/2024'
  },
  {
    id: 2,
    image: new2,
    title: 'Maximizing Solar Project Value.',
    company: 'HVH',
    link: 'https://hidrogenoverdehoy.com.ar/el-camino-a-fidgate-soluciones-innovadoras-para-maximizar-el-valor-de-los-proyectos-solares-fotovoltaicos/',
    date: '05/09/2024'
  }
]

const News = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-12'>
      <p className='text-center text-subtitle font-semibold text-primary'>
        Read the latest news about FIDgate:
      </p>
      <div className='flex gap-8'>
        {news.map((element) => (
          <Card
            key={element.id}
            image={element.image}
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
