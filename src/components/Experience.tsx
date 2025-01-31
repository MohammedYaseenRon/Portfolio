import { Header } from "./Header";
import {  FaBriefcase } from "react-icons/fa";


const experiences = [
    // {
    //     title: "Open-Source Contributor",
    //     company: "GitHub",
    //     date: "Jan 2024 – Present",
    //     description: [
    //         "Contributed to open-source projects, improving UI/UX with React and Tailwind.",
    //         "Fixed bugs, optimized performance, and added new features using Next.js and Node.js.",
    //         "Collaborated with developers worldwide through GitHub issues and pull requests.",
    //     ],
    //     icon: <FaGithub className="text-white text-2xl" />,
    // },
    {
        title: "Frontend Developer Intern",
        company: "TechNSure Private Limited",    
        date: "Nov 2024 – Jan 2025",
        description: [
            "Developed modern UI components using React and Tailwind CSS.",
            "Worked on optimizing website performance and enhancing accessibility.",
            "Collaborated with backend developers to integrate APIs seamlessly.",
        ],
        icon: <FaBriefcase className="text-white text-2xl" />,
    },
];

export default function Experience() {
    return (
        <div className="pt-8 pl-7">
            <Header title="Experience"></Header>
            <div>
                <section id="experience" className="py-12 text-white">
                    <div className="max-w-3xl">
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 border border-yellow-400 rounded-lg shadow-lg"
                                >
                                    <div className="p-3 bg-cyan-500 rounded-full">{exp.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                                        <p className="text-gray-400">{exp.company} | {exp.date}</p>
                                        <ul className="mt-2 list-disc list-inside text-gray-300">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
