'use strict';
import React from 'react';

import LocalDb from 'localDb';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';


class App extends React.Component{
    constructor(){
        super();
        this.db = new LocalDb('React-todos');
        this.state = {
            todos:this.db.get('todos')||[],
            isAllChecked:false
        }
    }
    changeTodoState(index,isDone,isChangeAll=false){
        console.log("index:",index)
        console.log("isDone:",isDone)
        if(isChangeAll){
            this.setState({
                todos:this.state.todos.map((todo)=>{
                    todo.isDone = isDone;
                    return todo
                }),
                isAllChecked:isDone
            })
        }else{
            this.state.todos[index].isDone = isDone;
            this.allChecked();
        }
        this.db.set('todos',this.state.todos)

    }
    //判断所有任务都完成，同步到底部的全选框
    allChecked(){
        let isAllChecked = false;

        //遍历任务，每个任务都完成，则isAllChecked=true;
        if(this.state.todos.every((todo)=> todo.isDone)){  //array.every(callback[, thisObject]); callback : 函数用来测试每个元素 返回true，如果此数组中的每个元素满足所提供的测试函数
            console.log("任务全部完成")
            isAllChecked = true;
        }
        if(!this.state.todos.length){
            isAllChecked = false;
        }
        console.log("isAllChecked:",isAllChecked)
        this.setState({todos:this.state.todos, isAllChecked})  //改变状态

        console.log("this.state2:",this.state)
    }
    //删除当前任务，传递给TodoItem的方法
    deleteTodo(index){
        console.log("this.state1:",this)
        this.state.todos.splice(index,1)
        this.allChecked();
        this.db.set('todos',this.state.todos);
        // this.setState({todos:this.state.todos})
    }
    //添加任务，是传递给Header组件的方法
    addTodoItem(item){
        // console.log("this.state1:",this.state)

        this.state.todos.push(item);
        this.allChecked();
        this.db.set('todos',this.state.todos);

    }
    //清除已完成的任务
    clearDone(){
        let todos = this.state.todos.filter((todo)=> !todo.isDone)
        this.allChecked();

        this.setState({
            todos:todos,
            isAllChecked:false
        })

        this.db.set('todos',todos)

    }
    render(){
        var props = {
            todoCount:this.state.todos.length||0,
            todoDoneCoune:this.state.todos&&this.state.todos.filter((todo)=>todo.isDone).length||0
        }
        return(
            <div className="panel">
                <TodoHeader addTodoItem={this.addTodoItem.bind(this)}/>
                <TodoMain deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} todos={this.state.todos}/>
                <TodoFooter clearDone={this.clearDone.bind(this)} changeTodoState={this.changeTodoState.bind(this)} isAllChecked={this.state.isAllChecked} {...props}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector("#app"));