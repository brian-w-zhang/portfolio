import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';

function Instructions({ text }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setShowContent(true);
    }, 1000); // Adjust the delay time as needed (in milliseconds)

    // Hide the textbox after 3 seconds
    const hideTimeout = setTimeout(() => {
      setShowTextBox(false);
    }, 5000); // 1500 (show time) + 3000 (display time)

    // Clear timeouts to prevent memory leaks
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Custom hook to handle the typewriter effect
  const [typedText] = useTypewriter({
    words: text,
    loop: 1,
    typeSpeed: 30,
    delaySpeed: 1500,
    deleteSpeed: 0,
  });

  return (
    <>
      {showContent && (
        <div className="instructions-box">
          <div className="text">{typedText}</div>
        </div>
      )}
    </>
  );
}

export default Instructions;
