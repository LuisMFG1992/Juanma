import { useTranslation } from 'react-i18next'

import { Member } from '../components'

const OurTeam = () => {
  const { t } = useTranslation()

  const teamMembers = t('about_ourKeyTeamMembers_children', {
    returnObjects: true
  })

  return (
    <section className='body-font text-gray-600'>
      <div className='px-5 py-24'>
        <div className='mb-20 flex w-full flex-col items-center text-center'>
          <h1 className='mb-4 text-title font-medium text-primary'>
            {t('about_ourKeyTeamMembers_title')}
          </h1>
          <p className='text-center text-paragraph leading-relaxed md:w-2/3'>
            {t('about_ourKeyTeamMembers_paragraph')}
          </p>
        </div>
        <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 '>
          {/* <div className='p-4 '> */}
          {teamMembers.map((member, idx) => (
            <Member key={idx} member={member} />
            //   <p key={idx}>hey</p>
          ))}
          {/* <Member /> */}
          {/* Member */}
          {/* <div className='flex h-full flex-col items-center text-center'>
              <img
                alt='team'
                className='mb-4 w-full rounded-lg object-cover object-center'
                src='https://dummyimage.com/200x200'
              />
              <div className='flex w-full flex-col gap-1'>
                <h2 className='text-paragraph font-medium text-gray-900'>
                  Juan Manuel Roldan
                </h2>
                <div className='flex items-center justify-center gap-2'>
                  <h3 className='text-lg text-gray-500'>CEO & Founder</h3>
                  <Link to={''}>
                    <FaLinkedin className='text-2xl ' />
                  </Link>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant='link' className='text-md h-auto p-0'>
                      Open Bio
                      <FaArrowRight className='ml-2' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-80'>
                    <p>
                      MSc. Mechanical Engineering (UNMDP) & Certified Energy
                      Expert (RENAC)
                    </p>
                    <br />
                    <p>
                      Optimization expert with over 7 years of experience in the
                      renewable energy industry. He has helped bridge the gap
                      between finance and engineering for some of the sector
                      {"'"}s largest investors, including Copenhagen
                      Infrastructure Partners and European Energy.
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div> */}
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default OurTeam
