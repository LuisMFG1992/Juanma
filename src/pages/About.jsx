import { useTranslation } from 'react-i18next'
import { Member } from '../components'
// import { teamMembers } from '../constants/teamMembers'

const About = () => {
  const { t } = useTranslation()

  const teamMembers = t('about_ourKeyTeamMembers_children', {
    returnObjects: true
  })

  return (
    <div>
      <section className='body-font flex flex-col items-center bg-light px-2 py-20 text-gray-600 sm:px-6'>
        <h1 className='pb-6 text-center text-title font-medium text-primary'>
          {t('about_mission_title')}
        </h1>
        <p className='text-center text-paragraph leading-relaxed md:w-2/3'>
          {t('about_mission_paragraph')}
        </p>
      </section>

      <section className='body-font text-gray-600'>
        <div className='mx-auto px-2 py-8 sm:px-6'>
          <div className='mb-20 flex w-full flex-col items-center text-center'>
            <h1 className='mb-4 text-title font-medium text-primary'>
              {t('about_ourKeyTeamMembers_title')}
            </h1>
            <p className='text-center text-paragraph leading-relaxed md:w-2/3'>
              {t('about_ourKeyTeamMembers_paragraph')}
            </p>
          </div>
          <div className='grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4'>
            {teamMembers.map((member) => {
              return <Member key={member.name} member={member} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
