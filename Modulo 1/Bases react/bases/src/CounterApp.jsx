import { useState } from "react";

export const CounterApp = ({value}) => {
    const addBtn = () => {
        console.log('+1');
        clicks += 1;
        setCounter(counter + 1);
        
    }
    let clicks = 0;
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Contador</h1>
            <p>total {counter}</p>
            <button onClick={addBtn}>
                agregar + 1
            </button>
        </div>
    )
}