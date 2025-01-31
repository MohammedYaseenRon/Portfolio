import { Header } from "./Header"
import { Trophy,Gamepad, Book } from "lucide-react"

export const About = () => {
  return (
    <div className="pt-8 pl-7 space-y-6">
      <Header title="About Me" />

      <div>
        <h3 className="text-2xl font-semibold mb-4">Hey there! I'm Mohammed Yaseen Ron</h3>
        <p className="text-base w-full max-w-2xl text-white/70 leading-relaxed">
          Currently pursuing a Computer Science degree specializing in AI & ML, I love creating websites using React,
          Next.js, and building full-stack applications. I also explore cross-platform development with React Native and
          enjoy crafting high-performance, user-friendly experiences. Always eager to learn, I love challenges that push
          me to perform. I'm diving deeper into AI & ML to expand my knowledge and drive innovation.
        </p>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center">
          <Trophy className="mr-2 text-yellow-400" />
          Achievements & Hackathons
        </h4>
        <ul className="list-disc list-inside space-y-2 text-white/70">
          <li>3rd place at the GNEC NGO Hackathon 2024 Fall - Compete for UN! Developed an application for Sustainable Cities and Communities.</li>
          <li>Participated in Mumbai Hacks which awarded a Guiness Book Record.</li>
          <li>Eagerly Participating in Multiple Hackathons.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center">
          <Gamepad className="mr-2 text-purple-400" />
          Beyond Coding
        </h4>
        <p className="text-base text-white/70">
          When I'm not immersed in code, you'll find me playing games or on the Football
          pitch. I believe in maintaining a healthy balance between technology and physical
          activities like gym, sports etc.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-4 flex items-center">
          <Book className="mr-2 text-blue-400" />
          Continuous Learning
        </h4>
        <p className="text-base text-white/70">
          I'm committed to lifelong learning. Currently, I'm started learning Artifical Intelligence Machine Learning and 
          techniques and contributing to open-source projects to sharpen my skills and give back to the developer
          community.
        </p>
      </div>
    </div>
  )
}

