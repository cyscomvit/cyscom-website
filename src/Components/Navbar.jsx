import { useState, useEffect, useCallback, useRef } from 'react'

import logo from '../assets/cyscom_logo.png'

import home_icon from '../assets/nav/nav_home_icon.svg'
import our_team_icon from '../assets/nav/nav_our_team_icon.svg'
import leaderboard_icon from '../assets/nav/nav_leaderboard_icon.svg'
import blogs_icon from '../assets/nav/nav_blogs_icon.svg'
import open_source_icon from '../assets/nav/nav_open_source_icon.svg'

import home_icon_mobile from '../assets/nav/nav-mobile/nav_home_icon.svg'
import our_team_icon_mobile from '../assets/nav/nav-mobile/nav_our_team_icon.svg'
import leaderboard_icon_mobile from '../assets/nav/nav-mobile/nav_leaderboard_icon.svg'
import blogs_icon_mobile from '../assets/nav/nav-mobile/nav_blogs_icon.svg'
import open_source_icon_mobile from '../assets/nav/nav-mobile/nav_open_source_icon.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenu = useRef(null)
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
    setIsNavBarVisible((prev) => !prev) // Moved toggleNavBar inside useCallback
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !mobileMenu.current.contains(event.target)) {
        toggleMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, toggleMenu])

  return (
    <nav className="relative max-w-7xl w-full mx-auto flex px-4 pt-6 lg:py-2 items-center justify-center lg:justify-between">
      <img
        className="h-[74px] lg:h-[62px] absolute lg:relative top-0 left-0 my-6 mx-4 lg:mx-5 lg:my-4"
        src={logo}
        alt="logo"
      />

      <button
        className={`hidden lg:block mb-4 mr-6 ${isOpen ? 'opened' : 'closed'}`}
        onClick={toggleMenu}
      >
        <svg height="42" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            strokeLinecap="round"
          />
          <path className="line line2" d="M 35,50 H 80" strokeLinecap="round" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="flex space-x-4 items-center rounded-2xl bg-[#F2F2F2] px-4 py-3 sticky top-10 lg:hidden">
        <a href="/">
          <div className="bg-[#88b7fd] p-3.5 rounded-xl">
            <img src={home_icon} alt="" />
          </div>
        </a>
        <a href="/our-team">
          <div className="bg-[#BBBBBB] hover:bg-[#A7A6A6] p-3.5 rounded-xl">
            <img src={our_team_icon} alt="" />
          </div>
        </a>
        <a href="https://opensrc.cyscomvit.com/leaderboard">
          <div className="bg-[#BBBBBB] hover:bg-[#A7A6A6] p-3.5 rounded-xl">
            <img src={leaderboard_icon} alt="" />
          </div>
        </a>
        <a href="https://blog.cyscomvit.com/">
          <div className="bg-[#BBBBBB] hover:bg-[#A7A6A6] p-3.5 rounded-xl">
            <img src={blogs_icon} alt="" />
          </div>
        </a>
        <a
          href="https://github.com/cyscomvit/"
          className="flex space-x-3 rounded-full hover:bg-[#122b80] bg-[#1a3cb5] px-9 py-3 text-white"
        >
          <img src={open_source_icon} alt="" />
          <b>Open Source</b>
        </a>
      </div>

      {isNavBarVisible && (
        <nav
          ref={mobileMenu}
          className="z-20 absolute right-10 top-24 bg-white rounded-2xl shadow-[0_0_50px_5px_rgb(165,_165,_165)] p-10 min-w-[280px]"
        >
          <ul className="space-y-8 text-xl text-[#2460ba] font-semibold">
            <li>
              <a className="flex items-center space-x-4" href="/">
                <img src={home_icon_mobile} alt="" />
                <div>Home</div>
              </a>
            </li>
            <li>
              <a className="flex items-center space-x-4" href="/our-team">
                <div>
                  <img src={our_team_icon_mobile} alt="" />
                </div>
                <div>Our Team</div>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-4"
                href="https://opensrc.cyscomvit.com/leaderboard"
              >
                <div>
                  <img src={leaderboard_icon_mobile} alt="" />
                </div>
                <div>Leaderboard</div>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-4"
                href="https://blog.cyscomvit.com/"
              >
                <div>
                  <img src={blogs_icon_mobile} alt="" />
                </div>
                <div>Blogs</div>
              </a>
            </li>
            <li>
              <a
                className="flex items-center space-x-4"
                href="https://github.com/cyscomvit/"
              >
                <div>
                  <img src={open_source_icon_mobile} alt="" />
                </div>
                <div>Open Source</div>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  )
}

export default Navbar
