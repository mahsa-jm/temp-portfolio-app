import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Mahsa Jamali</h2>
          <p className="mt-2">Front-End Developer</p>
          <p className='mt-2'>jamalimahsa1377@gmail.com</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <a href="https://github.com/mahsa-jm" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mahsa-jamali-4799751b1/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:jamalimahsa1377@gmail.com" className="mx-2 hover:text-gray-400">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Mahsa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;