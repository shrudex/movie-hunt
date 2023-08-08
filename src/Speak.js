import React, { useState } from 'react';

const Speak = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.log('Text-to-speech is not supported in this browser.');
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleInputChange} />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  );
};

export default Speak;
