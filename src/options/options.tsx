import React from 'react';
import {createRoot} from 'react-dom/client'; // Updated import
import './options.css';

const Test = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
      <img src='icon.png' width={'300'} height={'300'} alt='' />
      <p>React Chrome Extension Boilerplate </p>
      <small>
        <a href='https://junaidbinjaman.com'>Developed by Junaid Bin Jaman</a>
      </small>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);

root.render(<Test />);
