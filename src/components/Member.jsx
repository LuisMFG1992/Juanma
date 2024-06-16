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
        <h2 className='text-subtitle font-medium text-primary'>
          {member.name}
        </h2>
        <h3 className='text-paragraph text-gray-500'>{member.roll}</h3>
        <h3 className='text-paragraph text-gray-500'>{member.education}</h3>
      </div>

      {member?.projects && (
        <Accordion text={member.experience} options={member.projects} />
      )}
    </div>
  )
}

export default Member
