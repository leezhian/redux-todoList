import React, {Component} from 'react';
// antd 样式
import 'antd/dist/antd.css';
// antd 组件
import {Input, Button, List} from 'antd';
// Redux store
import store from './store/index.js';
// Action creators action的创建函数
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // subscribe 注册一个事件监听，每当store中的数据发生变化时都会自动触发。
        store.subscribe(this.handleStoreChange);
    }

    // input 改变事件
    handleInputChange(e) {
        // action的创建函数
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    // 按钮点击事件
    handleBtnClick(e) {
        const action = getAddItemAction();
        // 将action 传到store 内部
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        // 将action 派发store 内部
        store.dispatch(action);
    }

    // 事件监听函数
    handleStoreChange(e) {
        // 设置当前的state 的数据为store中的数据
        this.setState(store.getState());
    }

    render() {
        return (
            <div style={{marginTap: 10, marginLeft: 10}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{width: 300, marginRight: 10}}
                        onChange={this.handleInputChange}></Input>
                    <Button type="primary"
                            onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TodoList