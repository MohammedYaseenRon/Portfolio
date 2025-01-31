import {Intro} from "./components/Intro"
import {MainContent} from "./components/MainContent"

function App() {
  return (
    <div className='flex flex-col justify-center items-stretch m-0 p-0 bg-black text-[#fafafa] overflow-x-auto w-full min-h-screen'>
      <div className="flex flex-row gap-6 my-[60px] mx-auto p-6">
      <Intro></Intro>
      <MainContent></MainContent>
      </div>
    </div>
  )
}

export default App
