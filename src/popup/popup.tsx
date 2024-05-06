import React from 'react';
import {createRoot} from 'react-dom/client'; // Updated import
import './popup.css';

const Test = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Junaid Bin Jaman</p>
      <small>Is here to help the world.</small>
      <img src='icon.png' alt='' />
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);

root.render(<Test />);
