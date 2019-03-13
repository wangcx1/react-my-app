import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Transition.css';
import TodoItem from './TodoItem';
class Transition extends React.Component{
    constructor(){
        super();
        this.state={
            list:[],
            inputValue:''
        }
        this.addTodo=this.addTodo.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.getValue=this.getValue.bind(this);
    }
    addTodo(){
        // this.state.list.push(this.refs.todoVal.value);
        let list=[...this.state.list,this.state.inputValue]
        this.setState({
            list:list,
            inputValue:''
        });
        // this.refs.todoVal.value='';
    }
    deleteItem(index){
        // this.state.list.splice(index,1);
        let list=[...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    getValue(e){
        // console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })
    }
    render(){
        let items=this.state.list.map((item,index)=>{
                    return <li key={item}>
                        <TodoItem content={item} index={index} deleteItem={this.deleteItem}/>
                    </li>
        })
        return(
            <div>
                <input type="text" ref="todoVal" onChange={this.getValue} value={this.state.inputValue}/>
                <button onClick={this.addTodo}>Add Tode</button>
                <ul>
                    <ReactCSSTransitionGroup 
                        transitionName="reactAnim"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        {items}
                    </ReactCSSTransitionGroup>
                </ul>
                {/* <p>{this.props.match.params}</p> */}
            </div>
        )
    }
}
export default Transition;