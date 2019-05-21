import React,{Fragment} from 'react';
class TodoItem extends React.Component{
    constructor(){
        super();
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.deleteItem(this.props.index);
    }
    render(){
        return(
            <Fragment>
                {/* <p>{this.props.match.params.tel}</p> */}
               <p>{this.props.content}<button onClick={this.handleDelete}>X</button></p>
            </Fragment>
        )
    }
}
export default TodoItem;