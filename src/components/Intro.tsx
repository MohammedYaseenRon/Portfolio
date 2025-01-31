import { Profile } from './Profile'
import { Info } from './Info'
import { IntroFooter } from './IntroFooter'

export const Intro = () => {
  return <div className=" flex flex-col justify-center items-center border-[1px] border-solid border-[#3d3d3d] w-[275px] min-h-screen mb-0 pb-12 pt-14 z-1 bg-eerie-black rounded-3xl sticky">
    <Profile />
    <div className='flex flex-col justify-center items-center w-full bg-inherit sm:w-[80%] md:w-[75%] lg:w-[213px]'>
      {/* Horizontal Line */}
      <div className='bg-[#3f3f40] w-full h-px mt-[30px] py-px'></div>

      <div className='w-full'>
        {/* EMAIL Info */}
        <Info label='EMAIL' value='yaseenron070@gmail.com'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
        </Info>

        {/* RESUME Info */}
        <Info label="RESUME" value="Download Resume">
          <a href="/yaseenResumeFinal.pdf" download="Mohammed_Yaseen_Ron_Resume">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                  <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
                </linearGradient>
              </defs>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </a>
        </Info>

        {/* LOCATION Info */}
        <Info label="LOCATION" value="Mumbai, Maharashtra">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="url(#gradient)" className="w-[18px] h-[18px]">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="5%" style={{ stopColor: "#ffdb70" }} />
                <stop offset="95%" style={{ stopColor: "#ffbb5c" }} />
              </linearGradient>
            </defs>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
        </Info>
      </div>

      {/* Footer */}
      <IntroFooter />
    </div>

  </div>
}