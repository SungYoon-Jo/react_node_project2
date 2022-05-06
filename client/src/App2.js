// import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

function App2() {
    const [number, setnumder] = useState(1);
    function countreducer(oldcount, action) {
        if (action.type === 'up') {
            return oldcount + action.number;
        } else if (action.type === 'down') {
            return oldcount - action.number;
        } else if (action.type === 'reset') {
            return 0;
        }
    }
    const [count, countdispatch] = useReducer(countreducer, 0);
    function down() {
        countdispatch({ type: 'down', number: number });
    }
    function reset() {
        countdispatch({ type: 'reset', number: number });
    }
    function up() {
        countdispatch({ type: 'up', number: number });
    }
    function changenumber(event) {
        setnumder(Number(event.target.value));
    }

    return (
        <div>
            <input type="button" value="-" onClick={down} />
            <input type="button" value="0" onClick={reset} />
            <input type="button" value="+" onClick={up} />
            <input type="text" value={number} onChange={changenumber} />
            <span>{count}</span>
        </div>
    );
}

export default App2;