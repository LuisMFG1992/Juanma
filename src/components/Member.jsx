import Accordion from './Accordion'

const Member = ({ member }) => {
  return (
    <div className='flex flex-col items-center gap-4' key={member.name}>
      <div className='flex flex-col items-center gap-2  text-center xl:min-h-[250px]'>
        <img
          alt='team'
          className='size-60 rounded-full border-2 border-primary object-cover'
          src={member.image}
        />
        <h2 className='text-[1.4rem] font-medium text-primary xl:w-[278px]'>
          {member.name}
        </h2>

        {/* <h3 className='text-paragraph text-gray-500 md:min-h-[70px] xl:min-h-[120px] xl:w-[270px]'>
          {member.education.split('\n').map((line, index) => (
            <span key={index} className='mb-4 block'>
              {line}
            </span>
          ))}
        </h3> */}
      </div>

      {member?.projects && (
        <Accordion
          education={member.education}
          experience={member.experience}
          options={member.projects}
        />
      )}
    </div>
  )
}

export default Member
