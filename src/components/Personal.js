import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa"
import heroImg from '../assets/hero.svg';

const Personal = () =>{
    return(
        <div className='bg-slate-100 py-24'>
           <div className='align-element grid md:grid-cols-3 items-center gap-8'>
              <article>
                 <h1 className='text-7xl font-bold tracking-wider'>I'm Vanrath</h1>
                 <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Front-End Developer</p>
                 <div className='flex gap-x-4 mt-4'>
                   <a href="#">
                     <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaGithubSquare> 
                   </a>
                   <a href="#">
                     <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaLinkedin>
                   </a>
                   <a href="#"> 
                     <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'></FaTwitterSquare>
                   </a>
                </div>
              </article>
              <article>
                <img src={heroImg} className='h-80 lg:h-96'></img>
              </article>
           </div>
        </div>
    )
}
export default Personal