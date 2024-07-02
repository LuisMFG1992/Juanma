const Map = ({ url }) => {
  return (
    <iframe
      width='100%'
      height='100%'
      className='h-[400px]'
      title='map'
      src={url}
    ></iframe>
  )
}

export default Map
