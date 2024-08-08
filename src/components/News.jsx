import Card from './Card'

const News = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 pt-12'>
      <p className='text-subtitle font-semibold text-primary'>
        Read the latest news about Fidgate:
      </p>
      <Card />
    </div>
  )
}

export default News
