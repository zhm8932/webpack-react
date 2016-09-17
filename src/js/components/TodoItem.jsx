export default class TodoItem extends React.Component{
    handlerDelete(){  //删除当前任务
        console.log("handlerDelete")
        this.props.deleteTodo(this.props.index);
    }
    handlerMouseOver(){  //鼠标移入
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display='inline'
    }
    handlerMouseOut(){  //鼠标移出
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "none";
    }
    handlerChange(){ //处理任务是否完成状态
        let isDone = !this.props.isDone;
        console.log("改变状态isDone:",isDone)
        this.props.changeTodoState(this.props.index,isDone)

    }
    editStartTodo(){
        let isEdit = !this.props.isEdit;
        this.props.editStartTodo(this.props.index,isEdit)
    }
    editSavetTodo(){
        let isEdit = !this.props.isEdit;
        let text = ReactDOM.findDOMNode(this.refs.editInput).value;
        this.props.editSavetTodo(this.props.index,isEdit,text)
    }
    render(){
        // console.log("this.props:",this.props);
        console.log("this.props.isEdit:",this.props.isEdit);
        let doneStyle = this.props.isDone?{textDecoration:'line-through'}:{textDecoration:'none'};
        let doneClass = this.props.isDone? 'complete':'';

        return (
            <li onMouseOver = {this.handlerMouseOver.bind(this)} onMouseOut = {this.handlerMouseOut.bind(this)}>
                <input type="checkbox" checked={this.props.isDone} onChange = {this.handlerChange.bind(this)}/>
                {
                    this.props.isEdit ? <input ref="editInput" type="text" defaultValue={this.props.text}/>: <span className={doneClass} onClick = {this.handlerChange.bind(this)}>{this.props.text}</span>
                }
                <button ref="deleteBtn" onClick ={this.handlerDelete.bind(this)} style={{display:"none"}} className="fr">删除</button>
                {
                    this.props.isEdit ? <button className="editBtn" onClick={this.editSavetTodo.bind(this)}>保存</button> : <button className="editBtn" onClick={this.editStartTodo.bind(this)}>修改</button>
                }

            </li>
        )
    }
}

// <span className={doneClass} onClick = onClick{this.handlerChange.bind(this)}>{this.props.text}</span>