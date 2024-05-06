import React from "react";
import { createRoot } from "react-dom/client";
import "./options.css"

const Test = () => {
    return (
        <div>
            <h1>Hello, World</h1>
            <p>This is from the options page.</p>
            <p>The options page goes here.</p>
            <img src="icon.png" alt="" />
        </div>
    )
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);

root.render(<Test />);