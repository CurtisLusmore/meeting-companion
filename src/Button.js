import React from 'react';

export default function Button ({ icon, src, alt, connection }) {
  const audio = React.createRef();
  connection.recv(icon, () => audio.current.play());
  return <>
    <button aria-title={alt} onClick={() => connection.send(icon)}>{icon}</button>
    <audio ref={audio} src={src} />
  </>;
};