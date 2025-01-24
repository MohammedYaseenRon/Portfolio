import { Navbar } from "./Navbar"
import {Projects} from "./Projects"
import { Resume } from "./Resume"
import { About } from "./About"
import { Contact } from "./Contacts"

import { BrowserRouter, Routes, Route } from "react-router-dom"

export const MainContent= ()=>{
    return <div className="bg-eerie-black rounded-3xl relative w-[891px] min-h-[769px] h-fit m-0 border-[1px] border-solid border-[#3d3d3d]">
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index element={<Projects />} />
            <Route path="/projects" element= {<Projects/>}/>
            <Route path="/resume" element= {<Resume/>}/>
            <Route path="/about" element= {<About/>}/>
            <Route path="/contact" element= {<Contact/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}