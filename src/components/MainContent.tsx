import { Navbar } from "./Navbar"
import { Projects } from "./Projects"
import { About } from "./About"
import Skills from "./Skills"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Experience from "./Experience"

export const MainContent = () => {
    return <div className="bg-eerie-black rounde-xl md:rounded-3xl relative w-full w-[891px] min-h-screen h-fit m-0 border-[1px] border-solid border-[#3d3d3d] overflow-x-hidden">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route index element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skill" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </BrowserRouter>
    </div>
}