const Map = ({ url }) => {
  return (
    <iframe
      width='100%'
      height='100%'
      className='h-[400px]'
      title='map'
      src={url}
      // style='filter: grayscale(1) contrast(1.2) opacity(0.4);'
    ></iframe>
  )
}

export default Map
