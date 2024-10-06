import Timeline from './Timeline'
import ProposalLogo from '../assets/journey/proposal.svg'
import StarLogo from '../assets/journey/star.svg'
import CheckLogo from '../assets/journey/check.svg'
import RocketLogo from '../assets/journey/rocket.svg'

const OurJourney = () => {
  const timelineData = [
    {
      img: ProposalLogo,
      desc: 'CYSCOM is proposed for approval.',
      label: 'January 10th, 2022',
    },
    {
      img: CheckLogo,
      desc: 'The Cyscom Student Community (CYSCOM) is officially formed.',
      label: 'January 15th, 2022',
    },
    {
      img: RocketLogo,
      desc: 'CYSCOM kicks into action.',
      label: 'February 1st, 2022',
    },
    {
      img: StarLogo,
      desc: 'CYSCOM VIT hosts Cyber Defender, a 2 day technical and fun event for all Cyber enthusiasts, with a workshop and a CTF event.',
      label: 'April 19th-20th, 2022',
    },
  ]

  return (
    <div className="relative bg-gradient-to-t from-[#064BAF] via-[#064BAF] to-[#508BE0E8] w-full pt-28 pb-44">
      <div className="flex flex-row-reverse lg:flex-col-reverse max-w-7xl mx-auto w-full md:justify-center min-h-[35rem]">
        <div className="w-full md:hidden px-36">
          <Timeline timelineData={timelineData} />
        </div>

        <div className="hidden w-full justify-center md:flex">
          <div className="flex flex-col h-fit w-full max-w-72 mt-10 mx-10 space-y-20 relative">
            <div className="h-3/4 border-l-[7px] border-dashed border-[#88B7FD] absolute top-24"></div>

            {timelineData.map((item, index) => (
              <div key={index} className="flex">
                <div className="absolute rounded-full size-8 bg-[#88B7FD] -translate-x-3.5 translate-y-3.5"></div>
                <div className="flex justify-start bg-white rounded-lg p-2 mx-4 w-full translate-x-4 hover:scale-105 transition-all duration-300 select-none cursor-pointer">
                  <img
                    className="mr-2"
                    src={item.img}
                    alt={`timeline_logo_${index}`}
                  />
                  <div className="flex flex-col">
                    <h1 className="font-bold">{item.label}</h1>
                    <span className="text-xs">{item.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col max-w-7xl mx-auto absolute lg:top-0 top-28 lg:relative w-full md:w-fit md:items-center px-5">
          <h1 className="font-bold text-7xl text-[#BCD7FF]">Our</h1>
          <h1 className="text-7xl font-bold text-white">Journey</h1>
          <p className="w-1/2 md:w-full mt-4 text-sm text-[#88B7FD]">
            The Cybersearity Student Community (CYSCOM) was formed in 2022 and
            ever Since it has had one aim only. spreading awareness about cyber
            security and malware as welt as ransomware threats in society and
            circles of students and teaching them how to deploy counter measures
            through various events and undertakings.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurJourney
