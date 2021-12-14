import { useSelector } from "react-redux";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter() {
    const size = useSelector(state => state.size);
    const sum = useSelector(state => state.sum);

    return(
        <div>
            <CounterSizeGenerator></CounterSizeGenerator>
            <CounterGroupSum sum={sum}></CounterGroupSum>
            <CounterGroup size={size}></CounterGroup>
        </div>
    );
}


export default MultiCounter;