import logo from '../assets/LogoFIDgateBlue.png'

const ProcessFlow = ({ icon, left = true, right = true }) => {
  const FIDgate = <img src={logo} className='z-10 h-20 w-16' />
  const point = <div className='size-10 rounded-full bg-light'></div>

  return (
    <div className='relative flex h-80 items-center justify-center'>
      {left && (
        <div className='absolute left-0 top-[50%] h-[5px] w-[50%] bg-light '></div>
      )}
      {icon ? FIDgate : point}
      {right && (
        <div className='absolute right-0 top-[50%] h-[5px] w-[50%] bg-light '></div>
      )}
    </div>
  )
}

export default ProcessFlow
