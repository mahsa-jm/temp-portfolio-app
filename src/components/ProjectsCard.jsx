import React, { useState } from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const ProjectsCard = ({ url, img, githuburl, title, text }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Truncate text after a specific number of characters
    const truncateText = (text, maxLength = 150) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
            <div className="capitalize p-8">
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 text-slate-700 leading-loose'>
                    {isExpanded ? text : truncateText(text)}
                </p>
                {text.length > 150 && ( // Show "Read More" if text is longer than 150 characters
                    <button
                        className='mt-2 text-blue-500'
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button> 
                )}
                <div className='mt-4 flex gap-x-4'>
                    <a href={url}>
                        <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href={githuburl}>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;