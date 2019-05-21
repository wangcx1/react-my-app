import React from 'react'
import '../static/css/comments.scss'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment,getComments} from '../redux/action'
 class Comments extends React.Component{
    static propTypes={
        comments:PropTypes.array.isRequired,
        addComment:PropTypes.func.isRequired
    }
    constructor(){
        super();
        // this.state={
        //     comments:[
        //         // {name:'Tom',comment:'react挺好的'},
        //         // {name:'Jacky',comment:'react挺难的'}
        //     ],

        // }
    
    }
    componentDidMount=()=>{
        this.props.getComments();
        // 模拟异步ajax请求，获取数据
        // setTimeout(()=>{
        //     const comments=[
        //         {name:'Tom',comment:'react挺好的'},
        //         {name:'Jacky',comment:'react挺难的'}
        //     ];
        //     this.setState({
        //         comments:comments
        //     })
        // },1000);
    }
   // 第一步获取填入的内容
    submitForm=()=>{
        let commentsObj={
            name:this.refs.name.value,
            comment:this.refs.comment.value
        };
        console.log(commentsObj)
        this.props.addComment(commentsObj);
        // this.state.comments.unshift(commentsObj);
        // this.setState({
        //     comments:this.state.comments,
        // })
    }
    render(){
        const {comments}=this.props;
        return <div className='commentsContent'>
                <div className='header'>
                    <h1>请发表对React的评论</h1>
                </div>
                <div className='content'>
                    <div className='contentLeft'>
                        <div><label>用户名</label></div>
                        <div><input type='text' placeholder='用户名' ref="name"/></div>
                        <div><label>评论内容</label></div>
                        <div><textarea placeholder='评论内容' ref="comment"></textarea></div>
                    </div>
                    <div className='contentRight'>
                        <h4>评论回复：</h4>
                        <ul>
                            {comments.map((item,index)=>{
                                return <li key={index}>
                                <p>{item.name} 说：</p>
                                <p>{item.comment}</p>
                            </li>
                            })}
                            
                        </ul>
                    </div>
                   
                </div>
                <div className='btnBg'>
                        <button onClick={this.submitForm}>提交</button>
                    </div>
        </div>
    }
}
export default connect(
    state=>({comments:state.comments}),//state是一个comments 数组
    {
        addComment,
        getComments
    }
)(Comments)