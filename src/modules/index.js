import input from "./input";
import todos from "./todos";
import {combineReducers} from 'redux';

//리듀서를 합친다.
export default combineReducers({
    input,
    todos
});