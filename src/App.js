import React from 'react';
import Button from './Button';
import './App.css';


function App({ connection }) {
  return (
    <div className="App">
      <Button connection={connection} icon="👏" alt="Clap" src="/audio/clap.mp3" />
      <Button connection={connection} icon="👍" alt="Yes" src="/audio/yes.mp3" />
      <Button connection={connection} icon="👎" alt="No" src="/audio/no.mp3" />
      <Button connection={connection} icon="🔍" alt="Zoom" src="/audio/zoom.mp3" />
      <Button connection={connection} icon="🧏‍♀️" alt="Louder" src="/audio/louder.mp3" />
      <Button connection={connection} icon="💬" alt="Check chat" src="/audio/chat.mp3" />
    </div>
  );
}

export default App;
