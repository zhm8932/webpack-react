'use strict';

export default class TodoFooter extends React.Component{
    //处理全选和不全选的状态
    handlerAllState(event){
        console.log("handlerAllState")
        this.props.changeTodoState(null,event.target.checked,true);
    }
    handlerClick(){
        this.props.clearDone();
    }
    render(){
        return (
            <div className="todo-footer">
                <input checked={this.props.isAllChecked} type="checkbox" className="fl" onChange ={this.handlerAllState.bind(this)}/>
                <span>{this.props.todoDoneCoune}已完成 / {this.props.todoCount} 总数</span>
                <button className="fr" onClick ={this.handlerClick.bind(this)}>清除已完成</button>
            </div>
        )
    }
}