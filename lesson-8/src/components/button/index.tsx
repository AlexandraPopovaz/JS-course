import { useState } from "react";
import "./index.css";

export const Button = () => {
    const [counter, setCounter] = useState(0);

    return (
        <button className="App-button" onClick={() => setCounter(counter + 1)}>
            I've pressed {counter} times
        </button>
    );
};
