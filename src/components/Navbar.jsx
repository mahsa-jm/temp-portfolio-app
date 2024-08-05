// import {links} from '../data';
// const Navbar = () => {
//     return (
//         <nav className='bg-sky-800'>
//             <div className="mx-auto max-x-7xl px-8 py-4 flex flex-col
//              sm:flex-row sm:gap-x-16 sm:item-center sm:py-8">
//                 <h2 className="text-3xl font-bold">
//                     Web<span className="text-sky-950">Dev</span>
//                 </h2>
//                 <div className="flex gap-x-3 mt-2 text-2xl" >
//                     {links.map((link) => {
//                         const {id, href, text} = link
//                         return (
//                         <a 
//                         key={id}
//                         href={href} 
//                         className='capitalize text-lg tracking-wide
//                          hover:text-sky-400 duration-300'
//                         >
//                             {text}
//                         </a>
//                         )
//                     })}
//                 </div>
//              </div>
//         </nav>
//     )
// }
// export default Navbar

import React, { useState } from 'react';
import { links } from '../data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-sky-800'>
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <h2 className="text-3xl font-bold">
            Web<span className="text-sky-950">Dev</span>
          </h2>
          <button 
            className="text-white sm:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`flex-col sm:flex-row sm:flex gap-x-3 mt-2 text-2xl ${isOpen ? 'flex' : 'hidden'} sm:flex`}>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a 
                key={id}
                href={href} 
                className='capitalize text-lg tracking-wide hover:text-sky-400 duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;