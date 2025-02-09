import { Header } from "./Header"
import{ ProjectCard } from "./ProjectCard"
export const Projects= ()=>{
    return (
        <div className="pt-8 p-4">
            <Header title="Projects"></Header>
            <ProjectCard></ProjectCard>
        </div>
    );    
}