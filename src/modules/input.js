import {Map} from 'immutable';
import {handleActions,createAction} from 'redux-actions';

const SET_INPUT='input/SET_INPUT';

//types를 SET_INPUT으로 바꿔줌
export const setInput=createAction(SET_INPUT);

const initialState = Map({
    value: ''
});

//리덕스 생성 
export default handleActions({
    [SET_INPUT]: (state,action) =>{
        return state.set('value',action.payload)
    }
},initialState);