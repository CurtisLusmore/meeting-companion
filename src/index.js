import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HubConnectionBuilder } from '@microsoft/signalr';

const connection = new HubConnectionBuilder()
  .withUrl('/meeting')
  .build();
connection.start();

const connectionProxy = {
  send: sound => connection.invoke('send', sound),
  recv: (sound, callback) => connection.on(sound, callback)
};

ReactDOM.render(
  <React.StrictMode>
    <App connection={connectionProxy} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
