import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
};

// state 是整个store的数据
// reducer 可以接受state，但绝对不能修改state
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            const addState = JSON.parse(JSON.stringify(state));
            addState.list.push(addState.inputValue);
            addState.inputValue = '';
            return addState;
        case DELETE_TODO_ITEM:
            const delState = JSON.parse(JSON.stringify(state));
            delState.list.splice(action.index, 1);
            return delState;
        default:
            return state;
    }
}