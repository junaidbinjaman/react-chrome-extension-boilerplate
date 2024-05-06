import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import

const Test = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Junaid Bin Jaman</p>
            <small>Is here to help the world.</small>
        </div>
    );
};

const container = document.createElement('div');
document.body.appendChild(container)

const root = createRoot(container);


root.render(<Test />);