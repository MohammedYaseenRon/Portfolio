import { Header } from "./Header"
export const About = () => {
    return <div className="pt-8 pl-7">
        <Header title="About Me"></Header>
        <div className="mt-10">
            <h1 className="text-6xl tracking-widest font-bold text">Software <span className="flex flex-col text-[rgba(182,180,189,0.2)]">Engineer</span></h1>
            <p className="mt-4 text-base w-[600px] text-white/50">
            Passionate Computer Science student specializing in Artificial Intelligence and Machine Learning. I enjoy building creative and user-friendly applications, blending my skills in React,Nextjs and Backend technologies.I’m always eager to learn and innovate.
            {/* Beyond coding, I’m a Football and Gaming lover, constantly exploring new ideas to merge my hobbies with tech!" */}
            </p>
        </div>

    </div>
}