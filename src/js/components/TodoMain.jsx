
import TodoItem from './TodoItem';
export default class TodoMain extends React.Component{
    //遍历显示任务，转发props
    render(){
        return (
            <ul className="todo-list">
                {this.props.todos.map((todo,index)=>{
                    return <TodoItem key={index} index={index} {...todo} {...this.props}/>
                })}
            </ul>
        )
    }
}