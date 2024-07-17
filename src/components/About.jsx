import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-col-2 
            items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64'/>
                <article>
                    <SectionTitle text='code and coffee' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Lorem ipsum dolor sit amet consectetur,
                         adipisicing elit. Reiciendis rem minus quo hic facilis
                          optio explicabo similique, minima eos illum!
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod a, quo ex accusamus consequuntur quis ipsam sunt quaerat aliquam aspernatur, repellendus numquam delectus corrupti ipsum culpa perferendis architecto soluta!
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About;