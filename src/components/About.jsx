import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-sky-100 py-20' id='about'>
            <div className='align-element grid md:grid-col-2 
            items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64'/>
                <article>
                    <SectionTitle text='About me' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                    My name is Mahsa Jamali. I studied Information Science and pursued a career as a Front-End Developer,
                     driven by a passion for transforming ideas into interactive reality.
                      With extensive experience in React and various libraries,
                       I specialize in creating dynamic and user-friendly web applications. <br></br>
                    I thrive on solving complex problems and continuously improving my skill set
                     to stay at the forefront of web development trends. My projects are a testament to 
                     my dedication to quality and innovation, showcasing my ability to turn concepts into seamless
                      digital experiences. <br></br>
                    In this portfolio, you'll find some of my highlighted projects, demonstrating my technical
                     expertise. However, there are more projects available 
                     on my GitHub page. If you're interested, please take
                      a look. <br></br>
                    When I'm not coding, I enjoy learning new technologies and keeping myself up to date with the latest
                     trends in web development. This continuous learning journey not only enhances my skills but also fuels my passion
                      for creating cutting-edge solutions. I'm always eager to connect with like-minded professionals and explore new opportunities,
                       so feel free to reach out!

                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;