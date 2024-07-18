import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const words = text.split(' ');
    let currentWordIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => (prev ? `${prev} ${words[currentWordIndex]}` : words[currentWordIndex]));
      currentWordIndex++;

      if (currentWordIndex === words.length) {
        clearInterval(intervalId);
      }
    }, 300); 

    return () => clearInterval(intervalId);
  }, [text]);

  return <p className={className}>{displayedText}</p>;
};

export default AnimatedText;