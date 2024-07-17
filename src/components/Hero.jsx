import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='bg-indigo-200 py-24'>
            <div className='align-element grid md:grid-cols-2 
            items-center gap-8'>
                <article>
                    <h1 className='text-7xl text-slate-800 font-bold tracking-wider'>
                        I'm Mahsa
                    </h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize
                    tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-700 capitalize
                    tracking-wide'>
                         Welcome to my portfolio!
                         With a passion for crafting visually stunning and user-friendly
                         web applications, I specialize in transforming creative concepts into seamless digital experiences.
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href='https://github.com/mahsa-jm' >
                            <FaGithubSquare className='h-8 w-8 text-slate-500
                            hover:text-black duration-300'/>
                        </a>
                        <a href='https://www.linkedin.com/in/mahsa-jamali-4799751b1/' >
                            <FaLinkedin className='h-8 w-8 text-slate-500
                            hover:text-black duration-300'/>
                        </a>
                        {/* <a href='#' >
                            <FaTwitterSquare className='h-8 w-8 text-slate-500
                            hover:text-black duration-300'/>
                        </a> */}
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96'/>
                </article>
            </div>
        </div>
    )
}
export default Hero;