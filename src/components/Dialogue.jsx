import React, { useState } from 'react';

function DialogueBox({ text, onNext }) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to simulate typing effect
  const typeText = () => {
    if (currentIndex < text.length) {
      setTypedText((prevText) => prevText + text[currentIndex]);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTimeout(typeText, 50); // Typing speed
    }
  };

  // Function to handle button click
  const handleNextClick = () => {
    setTypedText(''); // Clear the text
    setCurrentIndex(0);
    onNext(); // Call the onNext function passed from the parent component
  };

  return (
    <div className="dialogue-box">
      <div className="text">{typedText}</div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default DialogueBox;
