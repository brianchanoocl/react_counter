import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter() {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size) {
        setSize(size);
    }

    function increase() {
        setSum(sum + 1);
    }

    function decrease() {
        setSum(sum - 1);
    }

    return(
        <div>
            <CounterSizeGenerator updateSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroupSum sum={sum}></CounterGroupSum>
            <CounterGroup size={size} increase={increase} decrease={decrease}></CounterGroup>
        </div>
    );
}


export default MultiCounter;