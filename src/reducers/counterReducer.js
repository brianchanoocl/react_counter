import { UPDATE_SIZE } from "../constants/constants";

const counterReducer = (state = {  size: 0 }, action) => {
    switch(action.type) {
        case UPDATE_SIZE:
            return {...state, size: action.payload};
        default:
            return state;
    }
};

export default counterReducer;