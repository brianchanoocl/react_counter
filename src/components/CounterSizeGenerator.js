import { useState } from "react";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        const sizeValue = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
        setSize(sizeValue);
        props.updateSize(sizeValue);
        props.resetCounter();
    }

    return(
        <div>
            <span>Size:</span>
            <input value={size} type="number" min="0" onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;