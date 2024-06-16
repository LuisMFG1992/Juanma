import Accordion from './Accordion'

const Member = ({ member }) => {
  return (
    <div className='flex flex-col items-center gap-4' key={member.name}>
      <div className='flex flex-col items-center gap-2 text-center xl:min-h-[430px]'>
        <img
          alt='team'
          className='size-40 rounded-full border-2 border-primary object-cover'
          src={member.image}
        />
        <h2 className=' text-subtitle font-medium text-primary xl:w-52'>
          {member.name}
        </h2>
        <h3 className='text-paragraph text-gray-500 xl:min-h-[60px] xl:w-60'>
          {member.roll}
        </h3>
        <h3 className='text-paragraph text-gray-500 md:min-h-[70px] xl:min-h-[120px] xl:w-[270px]'>
          {member.education}
        </h3>
      </div>

      {member?.projects && (
        <Accordion text={member.experience} options={member.projects} />
      )}
    </div>
  )
}

export default Member
