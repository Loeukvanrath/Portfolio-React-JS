import SectionTitle from "./SectionTitle"
import{skills} from '../Data'
import SkillsCard from "./SkillsCard"
const Skill= () =>{
    return(
         <section className='py-16 align-element ' id='skills'>
            <SectionTitle texts='tech stack'></SectionTitle>
            <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {skills.map((skill)=>{
                    return(
                        <SkillsCard key={skill.id} {...skill}>

                        </SkillsCard>
                    )
                })}
            </div>
         </section>
    )
}
export default Skill;