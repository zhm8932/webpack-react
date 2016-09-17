class TodoHeader extends React.Component{
    handlerKeyUp(e){
        if(e.keyCode==13){

            let text = e.target.value;
            console.log('value',text);
            // if(!text) return false;
            // let newTodoItem = {
            //     text:text,
            //     isDone:false
            // }
            //
            // console.log('newTodoItem',newTodoItem);
            // this.props.addTodoItem(newTodoItem); //传递参数值

            this.submit(text);
            e.target.value="";
        }
    }
    handlerClick(){

        let e = this.refs.task
        let text = ReactDOM.findDOMNode(e).value;
        console.log('value',text);
        // if(!text) return false;
        // let newTodoItem = {
        //     text:text,
        //     isDone:false
        // }
        //
        // console.log('newTodoItem',newTodoItem);
        // this.props.addTodoItem(newTodoItem); //传递参数值
        this.submit(text);

        e.value="";
    }
    submit(text){
        if(!text) return false;
        let newTodoItem = {
            text:text,
            isDone:false
        }

        console.log('newTodoItem',newTodoItem);
        this.props.addTodoItem(newTodoItem); //传递参数值
    }
    render(){
        return(
            <div className="panel-header">
                <h2>React Todos Example!!</h2>
                <input className="task" ref="task" type="text" placeholder="what's your task?" onKeyUp={this.handlerKeyUp.bind(this)}/>
                <button onClick = {this.handlerClick.bind(this)}>提交</button>
            </div>
        )
    }
}

export default TodoHeader;