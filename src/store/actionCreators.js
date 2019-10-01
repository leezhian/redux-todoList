// Action types
import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from "axios";

// action 创建函数， 返回一个action
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

// 当使用thunk的时候， action创建函数不仅仅是可以返回一个对象了，还可以是一个函数
export const getTodoList = () => {
    // 当返回是函数的时候，会接收到一个dispatch
    return (dispatch) => {
        axios.get('http://localhost:3031/list').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        });
    }
};