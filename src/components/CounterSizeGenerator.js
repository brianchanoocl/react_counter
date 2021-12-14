import { useState } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_SIZE } from "../constants/constants";

function CounterSizeGenerator(props) {
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleChangeSize(event) {
        const sizeValue = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value);
        setSize(sizeValue);
        dispatch({type: UPDATE_SIZE, payload: sizeValue});
        props.updateSize(sizeValue);
    }

    return(
        <div>
            <span>Size:</span>
            <input value={size} type="number" min="0" onChange={handleChangeSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;