import contentImage from '../assets/lock_pass.png'

function Content() {
  return (
    <>
      <div className="max-w-[1250px] w-[90vw] mt-[75px] mx-auto h-full flex flex-row-reverse lg:flex-col lg:items-center pb-[250px] lg:pb-[100px]">
        <div className="lg:w-full lg:text-center text-right w-[55%] ml-[30px] lg:ml-0">
          <img
            src={contentImage}
            alt="lock_pass_icon"
            className="w-[577px] sm:w-[95%] lg:w-[85%] xl:w-[90%] drop-shadow-[4px_4px_50px_#6ba0d2] mx-auto"
          />
        </div>
        <div className="w-[45%] lg:w-full">
          <div className="text-[80px] sm:text-[50px] lg:text-[70px] xl:text-[65px] leading-[73px] sm:leading-[48px] lg:leading-[63px] xl:leading-[58px] tracking-[-0.9px] sm:tracking-[-1.5px] lg:tracking-[-3.5px] xl:tracking-[-1.5px] mt-[35px] sm:mt-[65px] lg:mt-20 mb-[60px] sm:mb-[25px] xl:mb-10 lg:text-center text-left">
            <b>
              Think before
              <br />
              you{' '}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(145deg,_#528adb_42.81%,_#4c259e_57.76%)]">
                click
              </span>
              .
            </b>
          </div>
          <div className="text-[#787878] text-[19.5px] sm:text-[14.5px] lg:text-2xl font-normal leading-[25px] sm:leading-[21px] lg:leading-[35px] mb-[60px] sm:mb-10 lg:mb-20 xl:mb-[45px] tracking-[-0.3px]">
            Started with a few people having cyber safety in mind, the chapter
            now boasts a big gathering of members and associates alike. Join us
            on our mission to make cyberspace a safer place!
          </div>
          <div className="lg:text-center text-left">
            <a
              href="/"
              className="bg-[#1a3cb5] hover:bg-[#122a80] text-white text-lg sm:text-[15.5px] lg:text-[25px] py-3 sm:py-2.5 lg:py-4 px-[30px] sm:px-[25px] lg:px-[35px] rounded-[18px] sm:rounded-xl inline-block"
            >
              <b>Read More</b>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
