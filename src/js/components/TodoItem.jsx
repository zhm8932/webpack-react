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
    render(){
        // console.log("this.props:",this.props);
        let doneStyle = this.props.isDone?{textDecoration:'line-through'}:{textDecoration:'none'};
        let doneClass = this.props.isDone? 'complete':'';

        return (
            <li onMouseOver = {this.handlerMouseOver.bind(this)} onMouseOut = {this.handlerMouseOut.bind(this)}>
                <input type="checkbox" checked={this.props.isDone} onChange = {this.handlerChange.bind(this)}/>
                <span className={doneClass} onClick = {this.handlerChange.bind(this)}>{this.props.text}</span>
                <button ref="deleteBtn" onClick ={this.handlerDelete.bind(this)} style={{display:"none"}} className="fr">删除</button>
            </li>
        )
    }
}