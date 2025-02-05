import {Intro} from "./components/Intro"
import {MainContent} from "./components/MainContent"

function App() {
  return (
    <div className="flex flex-col justify-center items-stretch m-0 p-0 bg-black text-[#fafafa] overflow-x-auto w-full min-h-screen">
      <div className="flex flex-col md:flex-row gap-6 my-[30px] md:my-[60px] mx-auto p-4 md:p-6 w-full max-w-[1200px]">
      <Intro></Intro>
      <MainContent></MainContent>
      </div>
    </div>
  )
}

export default App
