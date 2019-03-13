import React ,{Component}from 'react';
import {Link,NavLink} from 'react-router-dom';
class TodoList extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            tel:['1001','1002','1003']
        }
    }
    handleClick(){
        console.log(22222);
        this.props.sendDataFromChild('我是来自子组件！')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
    
        return(
            <div>
                <h1>我是TodoList</h1>
                <button onClick={this.handleClick}>点击</button>
                <ul>
                    {
                        this.state.tel.map((item)=>{
                            return <li key={item}>
                                <Link to={`/detail/${item}`}>{item}</Link>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default TodoList;