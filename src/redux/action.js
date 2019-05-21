// 包含了所有的action creator（action的工厂函数）
// export const ADD_COMMENT='ADD_COMMENT' //添加评论
import {ADD_COMMENT,RECEIVE_COMMENTS} from './action-types'
export const addComment=((comment)=>({type:ADD_COMMENT,data:comment}));
// 同步接收comments
const receiveComments=(comments)=>({type:RECEIVE_COMMENTS,data:comments})
// 异步从后台获取数据
export const getComments=()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments=[
                {name:'Tom',comment:'react挺好的'},
                {name:'Jacky',comment:'react挺难的'},
                {name:'Jacky',comment:'react挺难的'}
            ];
            // 分发一个同步的action
            dispatch(receiveComments(comments))
        },1000)
    }
}