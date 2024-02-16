import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';

function DialogueBox({ text }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500); // Adjust the delay time as needed (in milliseconds)

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  // const [textToType] = useState(text[0]); // Store the text to type
  const [isDelay, setIsDelay] = useState(false); // Initially, there's no delay

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
        <div className="dialogue-box">
          <div className="text">{typedText}</div>
        </div>
      )}
    </>
  );
}

export default DialogueBox;
