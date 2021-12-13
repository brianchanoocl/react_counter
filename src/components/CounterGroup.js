import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props) {
    const [counterList, setCounterList] = useState([]);

    useEffect(() => {
        const counterList = new Array(props.size).fill(Date.now);
        console.log(counterList);
        setCounterList(counterList);
    }, [props.size])

    function increase() {
        props.increase();
    }

    function decrease() {
        props.decrease();
    }

    return(
        <div>
        {
            counterList.map((item, index) => {
                return <Counter key={item + index} increase={increase} decrease={decrease}></Counter>
            })
        }
        </div>
    );
}


export default CounterGroup;