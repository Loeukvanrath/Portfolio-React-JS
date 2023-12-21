import SectionTitle from "./SectionTitle"
import {projects} from "../Data"
import ProjectsCard from "./ProjectsCard"
const Projects = () => {
    return(
        <section className='py-20 align-element' id='projects'>
            <SectionTitle text='web creations'>
            </SectionTitle>
            <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                {
                    projects.map((project)=>{
                        return(
                            <ProjectsCard key={project.id}{...project}>

                            </ProjectsCard>
                        )
                         

                    })
                }
            </div>
        </section>
    )
}
export default Projects