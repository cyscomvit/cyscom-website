import BlogLogo from '../assets/mission/blogs.svg'
import EventsLogo from '../assets/mission/events.svg'
import InnovationLogo from '../assets/mission/innovation.svg'
import OpensourceLogo from '../assets/mission/open_source.svg'
import HoverCard from './HoverCard'

const OurMission = () => {
  const missions = [
    {
      title: 'Blogs',
      desc: 'We spread awareness regarding cybersecurity through weekly blogs, social media posts and more.',
      img: BlogLogo,
    },
    {
      title: 'Events',
      desc: 'Speaker sessions, competitions and periodic conferences all help to spread the message of security.',
      img: EventsLogo,
    },
    {
      title: 'Open Source',
      desc: 'We believe in maintaining a completely transparent and open source of code. Anyone from anywhere can access it.',
      img: OpensourceLogo,
    },
    {
      title: 'Innovation',
      desc: 'With continuous projects and new ideas, we aim to create unique tools to spread awareness on cybersecurity.',
      img: InnovationLogo,
    },
  ]

  return (
    <div className="flex md:flex-col-reverse lg:flex-row justify-between gap-2 max-w-7xl mx-auto mt-8 mb-14 px-4">
      <div className="grid sm:grid-cols-1 grid-cols-2 gap-6 sm:mx-10">
        {missions.map((v, i) => (
          <HoverCard key={i} dropped={i % 2 !== 0}>
            <div className="flex flex-col max-w-64 space-y-4">
              <img
                className="size-16"
                src={v.img}
                alt={v.title.toLowerCase()}
              />
              <h1 className="font-bold text-2xl text-black">{v.title}</h1>
              <p className="">{v.desc}</p>
            </div>
          </HoverCard>
        ))}
      </div>

      <div className="flex flex-col md:items-center items-end">
        <h1 className="font-bold text-7xl">Our</h1>
        <h1 className="text-7xl font-bold text-[#6C6C6C]">Mission</h1>
        <p className="w-80 md:text-center text-end">
          The Cybersecurity Student Community (CYSCOM). VITCC aims to spread
          awareness about cybersecurity.
        </p>
      </div>
    </div>
  )
}

export default OurMission
