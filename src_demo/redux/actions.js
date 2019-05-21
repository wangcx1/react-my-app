import { INCREMENT, DECREMENT } from "./action-type";

/*
包含所有的action creator,
同步的action都是返回一个对象
异步的action返回的是一个函数
*/
// 增加
export const increment = (num) => ({ type: INCREMENT, data: num });
// 减少
export const decrement = (num) => ({ type: DECREMENT, data: num });
// 异步
export const incrementAsync = (num) =>{
    return dispatch=>{
        // 异步代码
        setTimeout(()=>{
            // 1s之后才去分发一个增加的action
            dispatch(increment(num))
        },1000)
    }
}