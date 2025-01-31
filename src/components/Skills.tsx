import { Header } from "./Header";

import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiNextdotjs,
    SiPrisma,
} from "react-icons/si"

const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "NextJS", icon: SiNextdotjs, color: "text-cyan-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Prisma", icon: SiPrisma, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "React Native", icon: SiReact, color: "text-blue-400" }
]

export default function Skills() {
    return (
        <div className="pt-8 pl-7">
            <Header title="Skills"></Header>
            <div>
                <h1 className="text-3xl font-bold text-white mb-12">Full Stack Development</h1>
            </div>
            <div className="px-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-2 bg-white rounded-xl shadow-md transform transition-all hover:scale-105 hover:shadow-lg"
                        >
                            <skill.icon className={`w-12 h-12 ${skill.color} mb-4`} />
                            <h3 className="text-lg font-semibold text-gray-800 text-center">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}