import { useState } from 'react'
import { SiGithub} from 'react-icons/si'

interface Project {
  id: number
  name: string
  category: string
  image: string
  githubUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "Fitness Tracking Web Application",
    category: "Web Development",
    image: "/Fitness.png?height=200&width=300",
    githubUrl: "https://github.com/MohammedYaseenRon/fitness-trakcer-app"
  },
  {
    id: 2,
    name: "Talent Tracks",
    category: "Web Development",
    image: "/Talent.png?height=200&width=300",
    githubUrl: "https://github.com/MohammedYaseenRon/TalentTrack"
  },
  {
    id: 3,
    name: "Fitness",
    category: "Web Development",
    image: "/FrontendFit.png?height=200&width=300",
    githubUrl: "https://github.com/MohammedYaseenRon/fitness-frontend"
  }
]

export const ProjectCard = ()=> {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className=" h-[300px] flex flex-row justify-center p-4 gap-4">
      
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-[264px] overflow-hidden rounded-lg transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
              hoveredId === project.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-bold">{project.name}</h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-black rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  <SiGithub className="w-4 h-4 mr-2"/>
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
    
    </div>
  )
}
