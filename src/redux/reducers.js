//包含n个reducer函数（根据老的state和action返回一个新的state）
import {combineReducers} from 'redux'
import {ADD_COMMENT,RECEIVE_COMMENTS} from './action-types'
const inintComments=[
        
        ];
 function comments(state=inintComments,action){
    switch (action.type){
        case ADD_COMMENT:
        return [action.data,...state]
        case RECEIVE_COMMENTS:
        return action.data
        default:
        return state;
    }
}
export default combineReducers({
    comments
})