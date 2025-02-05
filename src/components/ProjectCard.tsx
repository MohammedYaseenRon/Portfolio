import { useState } from 'react'
import { SiGithub } from 'react-icons/si'
import { motion } from 'framer-motion'

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

export const ProjectCard = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 justify-center items-center">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: project.id * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-full md:w-[264px] overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black bg-opacity-70"
          >
            <div className="p-4 h-full flex flex-col justify-between">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-lg font-bold">{project.name}</h3>
                <p className="text-gray-300">{project.category}</p>
              </motion.div>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGithub className="w-4 h-4 mr-2"/>
                Github
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}