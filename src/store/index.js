// 使用Redux-thunk， 首先需要在创建store的时候引入 applyMiddleware
import {createStore, applyMiddleware, compose} from "redux";
// 引入thunk
import thunk from "redux-thunk";
import reducer from "./reducer";

// 使用浏览器 redux-devtools 插件
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

// 创建store 必须要有reducer
const store = createStore(
    reducer,
    // 使用thunk 中间件
    enhancer
);

export default store;