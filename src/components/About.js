import SectionTitle from "./SectionTitle"
import aboutimg from "../assets/about.svg"
const About = () =>{
    return(
        <section className='bg-white' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutimg} className='w-full h-64'></img>
                <article>
                    <SectionTitle text='code and coffee'></SectionTitle>
                    <p>
                        Hello Everyone! My name's Loeuk vanrath. Currently I am a ICT Student
                        of University of Puthisastra I am year 4 smester1
                        .I enjoy drink coffee every day and Free time I always learn coding and enjoy views
                        with tree.
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About