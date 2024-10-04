import { Link } from 'react-router-dom'
import { teamPictures } from '../constants'
import { FaArrowRight, FaLinkedin } from 'react-icons/fa'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'

const Member = ({ member }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <img
        alt='team'
        className='mb-4 max-h-[200px] w-full max-w-[200px] flex-shrink-0 rounded-full border border-primary object-cover object-center'
        src={teamPictures[member.image]}
      />
      <div className='flex w-full flex-col gap-1'>
        <h2 className='text-lg font-medium text-gray-900'>{member.name}</h2>
        <div className='flex items-center justify-center gap-2'>
          <h3 className='text-lg text-gray-500'>{member.rol}</h3>
          <Link to={member.linkedInURL}>
            <FaLinkedin className='text-xl text-primary' />
          </Link>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant='link' className='text-md h-auto p-0'>
              Open Bio
              <FaArrowRight className='ml-2' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='z-10 w-[500px]'>
            <span className='font-semibold'>Education:</span>
            {member.education.split('\n').map((line, index) => (
              <span key={index} className='mb-4 block'>
                {line}
              </span>
            ))}

            <span className='font-semibold'>Experience:</span>
            {member.experience.split('\n').map((line, index) => (
              <span key={index} className='mb-4 block'>
                {line}
              </span>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Member
