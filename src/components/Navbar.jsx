import {links} from '../data';
const Navbar = () => {
    return (
        <nav className='bg-indigo-200'>
            <div className="mx-auto max-x-7xl px-8 py-4 flex flex-col
             sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
                <h2 className="text-3xl font-bold">
                    Web<span className="text-violet-900">Dev</span>
                </h2>
                <div className="flex gap-x-3 mt-2 text-2xl" >
                    {links.map((link) => {
                        const {id, href, text} = link
                        return (
                        <a 
                        key={id}
                        href={href} 
                        className='capitalize text-lg tracking-wide
                         hover:text-indigo-500 duration-300'
                        >
                            {text}
                        </a>
                        )
                    })}
                </div>
             </div>
        </nav>
    )
}
export default Navbar